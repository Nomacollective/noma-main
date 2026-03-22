// Set a variable that contains all the fields needed for articles when a fetch for
// content is performed
const FEATURED_EDITIONS = `
{
    contentTypeLocationCollection(where: {featured: true}) {
      items {
        sys {
          id
        }
        heroImage {
          title
          description
          url
        }
        city
        country
        continent
        startDate
        endDate
        locationCardColor
        timeZone
        temperature
        tripType
        accomodationsCollection {
          items {
            price
            spotsLeft
          }
        }
      }
    }
    homeWhatWeOfferCollection {
      items {
        title
        description
        image {
          title
          url
        }
      }
    }
  }
`;

const GET_FAQS = `
{
    faqCollection {
      items {
        title
        image {
          url
          title
        }
      }
    }
  }
`;

const GET_ALL_EDITIONS = `
{
    contentTypeLocationCollection {
      items {
        sys {
          id
        }
        heroImage {
          title
          description
          url
        }
        city
        country
        continent
        startDate
        endDate
        locationCardColor
        timeZone
        temperature
        tripType
        accomodationsCollection {
          items {
            price
            spotsLeft
          }
        }
      }
    }
  }
`;

const GET_ALL_BLOGSS = `
{
    blogCollection {
      items {
        sys {
          id
        }
        highlight
        title
        category
        excerpt
        cardImage {
          url
          title
        }
      }
    }
  }
`;

const GET_BLOG_BY_ID = (blogId: string) => `
{
  blog(id: "${blogId}") {
    title
    category
    cardImage {
      url
    }
    content {
      json
      links {
        assets {
          block {
            sys {
              id
            }
            url
            width
            height
            description
          }
        }
      }
    }
  }
}`;

const GET_ID_BY_CITY = (city: string) => `
{
  contentTypeLocationCollection(where: {city: "${city}"}) {
    items {
      sys {
        id
      }
      startDate
    }
  }
}
`;

const GET_LOCATION_BY_ID = (locationId: string) => `
{
    contentTypeLocation(id: "${locationId}") {
      city
      country
      timeZone
      temperature
      startDate
      endDate
      description
      foodieHaven
      wellnessAndRelaxation
      natureAndWildlife
      activityAndFitness
      nightlifeAndPartying
      heroImage {
        url
      }
      description2 {
        json
      }
      facilitiesCollection {
        items {
          title
          description
        }
      }
      managerCollection {
        items {
          name
          description {
            json
          }
          profileImage {
            url
          }
        }
      }
      highlightsCollection {
        items {
          tag
          image {
            url
          }
          title
          description
          videoUrl
        }
      }
      accomodationsCollection {
        items {
          title
          preOrder
          price
          description
          spotsLeft
          imagesCollection {
            items {
              url
            }
          }
        }
      }
      guestgalleryCollection {
        items {
          title
          url
        }
      }
      alumniReviewCollection {
        items {
          alumniName
          review {
            json
          }
          numberOfTrips
          jobTitle
        }
      }
    }
  }
`;

const GET_ALL_FAQS = `
{
  faqsPageFaqCollection {
    items {
      question
      order
      answer {
        json
      }
    }
  }
}
`;

const GET_ALL_PREFERRED_PARTNERS = `
{
  preferredPartnersCollection {
    items {
      sys {
        id
      }
      name
      oneLiner
      description {
        json
      }
      picture {
        title
        url
      }
      link
      category
      buttonText
    }
  }
}`;

// Simple in-memory cache to reduce redundant API calls
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

async function fetchGraphQL(query, preview = false) {
  // Create cache key from query and preview flag
  const cacheKey = `${query}-${preview}`;
  const now = Date.now();
  
  // Check if we have a cached result that's still valid
  if (cache.has(cacheKey)) {
    const { data, timestamp } = cache.get(cacheKey);
    if (now - timestamp < CACHE_DURATION) {
      return data;
    }
    // Remove expired cache entry
    cache.delete(cacheKey);
  }
  
  try {
    const result = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
          // Contentful content or draft content
          Authorization: `Bearer ${
            preview
              ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
              : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
          }`,
        },
        body: JSON.stringify({ query }),
        // Associate all fetches for articles with an "articles" cache tag so content can
        // be revalidated or updated from Contentful on publish
        // next: { tags: ["articles"] },
      }
    ).then((response) => {
      console.log('Contentful API Response Status:', response.status);
      if (response.status === 429) {
        console.error('🚨 CONTENTFUL API LIMIT EXCEEDED! Status 429 - Too Many Requests');
      }
      return response.json();
    });
    
    // Log the result to see what we're getting from Contentful
    console.log('Contentful API Result:', result);
    
    // Check for rate limit errors
    if (result.errors) {
      console.error('Contentful API Errors:', result.errors);
      result.errors.forEach(error => {
        if (error.message.includes('rate limit') || error.message.includes('quota')) {
          console.error('🚨 RATE LIMIT ERROR DETECTED:', error.message);
        }
      });
    }
    
    // Only cache successful responses
    if (result && !result.errors) {
      cache.set(cacheKey, { data: result, timestamp: now });
    }
    
    // Clean up old cache entries periodically
    if (cache.size > 100) {
      const entries = Array.from(cache.entries());
      entries.forEach(([key, { timestamp }]) => {
        if (now - timestamp > CACHE_DURATION) {
          cache.delete(key);
        }
      });
    }
    
    return result;
  } catch (error) {
    console.error('GraphQL fetch error:', error);
    // Return a basic error structure that won't break the app
    return { data: null, errors: [{ message: error.message }] };
  }
}

// Export fetchGraphQL for use in other files
export { fetchGraphQL };

export const getFeaturedEditions = async () => {
  const data = await fetchGraphQL(FEATURED_EDITIONS);
  
  // If API is rate limited, return fallback data
  if (!data?.data || data.errors) {
    console.warn('🚨 Using fallback data - Contentful API may be rate limited');
    return {
      contentTypeLocationCollection: { items: [] },
      homeWhatWeOfferCollection: { items: [] }
    };
  }
  
  return data?.data || { contentTypeLocationCollection: { items: [] }, homeWhatWeOfferCollection: { items: [] } };
};

export const getAllEditions = async () => {
  const data = await fetchGraphQL(GET_ALL_EDITIONS);
  return data?.data || { contentTypeLocationCollection: { items: [] } };
};

export const getFaqs = async () => {
  const data = await fetchGraphQL(GET_FAQS);
  return data?.data || { faqCollection: { items: [] } };
};

export const getAllBlogs = async () => {
  const data = await fetchGraphQL(GET_ALL_BLOGSS);
  return data?.data || { blogCollection: { items: [] } };
};

interface Sys {
  id: string;
}

interface Item {
  sys: Sys;
  startDate: string;
}

const filterByMonth = (
  { data }: { data: Item[] },
  { month, year, startDay }: { month: string; year: string; startDay: number }
) => {
  const dataArray = Array.isArray(data) ? data : [data];

  return dataArray.filter((item) => {
    const itemDate = new Date(item.startDate);
    const itemMonth = itemDate.toLocaleString("en-US", { month: "short" });
    const itemYear = itemDate.getFullYear();
    const itemDay = itemDate.getDate();
    return (
      itemMonth === month &&
      itemYear === parseInt(year, 10) &&
      startDay === itemDay
    );
  });
};

export const getLocationByCity = async (
  { city }: { city: string },
  { month, year, startDay }: { month: string; year: string; startDay: number }
) => {
  try {
    const locationIdResponse = await fetchGraphQL(
      GET_ID_BY_CITY(city.replace("-", " "))
    );
    
    // Check if we got valid data
    if (!locationIdResponse?.data?.contentTypeLocationCollection?.items) {
      console.error('No location data received from Contentful API');
      return { contentTypeLocation: null };
    }
    
    const filteredLocations = filterByMonth(
      { data: locationIdResponse.data.contentTypeLocationCollection.items },
      { month, year, startDay }
    );
    
    // Check if filtering returned any results
    if (!filteredLocations || filteredLocations.length === 0) {
      console.error('No locations found matching the specified date criteria');
      return { contentTypeLocation: null };
    }
    
    // Check if the first result has the required sys.id
    if (!filteredLocations[0]?.sys?.id) {
      console.error('Location found but missing sys.id');
      return { contentTypeLocation: null };
    }
    
    const filteredId = filteredLocations[0].sys.id;
    const dataResponse = await fetchGraphQL(GET_LOCATION_BY_ID(filteredId));
    
    return dataResponse?.data || { contentTypeLocation: null };
  } catch (error) {
    console.error('Error in getLocationByCity:', error);
    return { contentTypeLocation: null };
  }
};

export const getLocationById = async ({
  locationId,
}: {
  locationId: string;
}) => {
  const data = await fetchGraphQL(GET_LOCATION_BY_ID(locationId));
  return data?.data || { contentTypeLocation: null };
};

export const getBlogById = async ({ blogId }: { blogId: string }) => {
  const data = await fetchGraphQL(GET_BLOG_BY_ID(blogId));
  return data?.data || { blog: null };
};

export const getAllFaqs = async () => {
  const data = await fetchGraphQL(GET_ALL_FAQS);
  return data?.data || { faqsPageFaqCollection: { items: [] } };
};

export const getAllPreferredPartners = async () => {
  const data = await fetchGraphQL(GET_ALL_PREFERRED_PARTNERS);
  return data?.data || { preferredPartnersCollection: { items: [] } };
};
