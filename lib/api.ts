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
        startDate
        endDate
        locationCardColor
        timeZone
        temperature
        accomodationsCollection {
          items {
            price
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
      pdf {
        url
      }
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

async function fetchGraphQL(query, preview = false) {
  return fetch(
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
  ).then((response) => response.json());
}

export const getFeaturedEditions = async () => {
  const data = await fetchGraphQL(FEATURED_EDITIONS);
  return data?.data;
};

export const getAllEditions = async () => {
  const data = await fetchGraphQL(GET_ALL_EDITIONS);
  return data?.data;
};

export const getFaqs = async () => {
  const data = await fetchGraphQL(GET_FAQS);
  return data?.data;
};

export const getAllBlogs = async () => {
  const data = await fetchGraphQL(GET_ALL_BLOGSS);
  return data?.data;
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
  const locationIdResponse = await fetchGraphQL(
    GET_ID_BY_CITY(city.replace("-", " "))
  );
  console.log(locationIdResponse);
  const filteredId = filterByMonth(
    { data: locationIdResponse.data.contentTypeLocationCollection.items },
    { month, year, startDay }
  )[0].sys.id;

  const dataResponse = await fetchGraphQL(GET_LOCATION_BY_ID(filteredId));
  const data = dataResponse.data;

  return data;
};

export const getLocationById = async ({
  locationId,
}: {
  locationId: string;
}) => {
  const data = await fetchGraphQL(GET_LOCATION_BY_ID(locationId));
  return data?.data;
};

export const getBlogById = async ({ blogId }: { blogId: string }) => {
  const data = await fetchGraphQL(GET_BLOG_BY_ID(blogId));
  return data?.data;
};

export const getAllFaqs = async () => {
  const data = await fetchGraphQL(GET_ALL_FAQS);
  return data?.data;
};

export const getAllPreferredPartners = async () => {
  const data = await fetchGraphQL(GET_ALL_PREFERRED_PARTNERS);
  return data?.data;
};
