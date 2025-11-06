import Image from "next/image";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import { useRef, useState, useEffect } from "react";
import { getFeaturedEditions } from "@/lib/api";

export async function getServerSideProps() {
  const locations = await getFeaturedEditions();
  return {
    props: {
      locations: locations?.contentTypeLocationCollection?.items || [],
    },
  };
}

const RemoteLife = ({ locations }) => {
  const carouselRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 90, height: 90 });
  const formRef = useRef(null); // 👈 reference for Fillout embed

  // Responsive flower sizing
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) {
        setDimensions({ width: 80, height: 80 });
      } else {
        setDimensions({ width: 90, height: 90 });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Load Fillout script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    if (formRef.current) {
      formRef.current.appendChild(script);
    }
  }, []);

  // ✅ Make the Fillout button wider after it loads
  useEffect(() => {
    const styleFilloutButton = () => {
      const btn = document.querySelector(
        '[data-fillout-id="sjtKeVoNG1us"] button'
      );
      if (btn) {
        btn.style.paddingLeft = "2.5rem";
        btn.style.paddingRight = "2.5rem";
        btn.style.minWidth = "13rem"; // wider base
        btn.style.fontSize = "1.50rem";
        btn.style.paddingTop = "0.25rem";// less vertical padding
        btn.style.paddingBottom = "0.25rem";
        btn.style.textTransform = "uppercase";
      }
    };
    setTimeout(styleFilloutButton, 1200);
  }, []);

  return (
    <Layout>
      <PageSEO title="7 Stages of Remote Life" />

      {/* HERO SECTION */}
      <section className="block md:hidden px-4 mt-[7px]">
        <div
          className="w-full bg-center bg-cover h-[282px] sm:h-[582px] rounded-lg relative"
          style={{
            backgroundImage: "url('/img/beach.jpg')",
            backgroundPosition: "center bottom",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-[3.50rem] font-display leading-tight drop-shadow-lg">
              7 Stages of Remote Life
            </h1>
          </div>
        </div>
      </section>

      {/* DESKTOP HERO */}
      <section className="font-Montserrat relative w-full h-[80vh] hidden md:block">
        <Image
          src="/img/beach.jpg"
          alt="Remote Life"
          fill
          className="object-cover object-[center_75%] z-0"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-center px-4">
          <h1 className="text-5xl md:text-[3.50rem] font-display font-bold leading-tight drop-shadow-lg">
            7 Stages of Remote Life
          </h1>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-[#BBE4D7] py-16 px-4 text-center font-Montserrat">
        <h2 className="text-2xl font-bold text-carbon-Black mb-6">
          The terms “Remote Work” and “Digital Nomad” just don’t fit anymore.
        </h2>
        <p
          className="text-sm mb-3 mx-auto text-carbon-Black font-medium"
          style={{ maxWidth: "52rem" }}
        >
          One defining people by employment, not lifestyle, and the other
          gaining negative connotations around irresponsible travel.
        </p>
        <p
          className="text-sm mb-3 mx-auto text-carbon-Black font-medium"
          style={{ maxWidth: "52rem" }}
        >
          We need a better way to speak about{" "}
          <span className="font-bold">location independence</span>. One that is
          clear, simple and above all, connects us as a community.
        </p>
        <p
          className="text-sm mb-3 mx-auto text-carbon-Black font-medium"
          style={{ maxWidth: "52rem" }}
        >
          That’s why we have created a new spectrum to accurately define this
          new way of living, we call this the{" "}
          <span className="font-bold">7 Stages of Remote Life.</span> Each stage
          represents a unique point in a person's journey but they all belong to
          a bigger movement of location independence.
        </p>
        <p
          className="text-sm mx-auto text-carbon-Black font-medium"
          style={{ maxWidth: "52rem" }}
        >
          By mapping these stages it makes it easier for individuals and
          communities to align, participate, and grow.
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <p className="text-base font-bold text-carbon-Black m-0">
            Discover more
          </p>
          <Image
            src="/img/Union.png"
            alt="Chevron Down"
            width={11}
            height={11}
            className="rotate-90"
          />
        </div>
      </section>

      {/* STAGE GRID */}
      <div className="bg-[#F4F1E6] py-12 px-4 sm:px-12">
        <div className="pb-16 px-4 font-Montserrat text-center relative">
          <div className="relative flex items-center justify-center">
            <div className="absolute ipad:left-[4rem] left-[-1.5rem] top-[22%] sm:left-[4rem] sm:top-1/2 md:left-[-2rem] lg:left-[24rem] -translate-y-1/2">
              <Image
                src="/img/yellow-flower.svg"
                alt="Yellow flower"
                width={dimensions.width}
                height={dimensions.height}
                priority
                className="inline-block"
              />
            </div>
            <p className="font-Montserrat text-md font-bold text-carbon-Black text-[1.5rem]">
              Let’s dive into the
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-display leading-tight text-carbon-Black pt-4 md:pt-[1rem]">
            7 Stages of Remote Life
          </h1>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-y-12 gap-x-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-y-12 gap-x-[5rem] max-w-7xl mx-auto">
            {[
              {
                title: "Location Dependent",
                img: "/img/icon-01.svg",
                color: "#FFDA7F",
                quote: "“Two weeks off, a year of routine.”",
                details: [
                  "Traditional 9-5 job, fixed home base",
                  "Limited travel, short vacations",
                  "No flexibility, high burnout",
                ],
              },
              {
                title: "Remote Ready",
                img: "/img/icon-02.svg",
                color: "#BBE4D7",
                quote: "“I have the freedom… but I’m not using it.”",
                details: [
                  "Has a remote or flexible job",
                  "Still stuck in one place",
                  "No change in lifestyle yet",
                ],
              },
              {
                title: "Workcationer",
                img: "/img/icon-03.svg",
                color: "#FCD9DF",
                quote: "“I travel a few months a year while working.”",
                details: [
                  "Works remotely 2–6 months a year",
                  "Bounces between rentals and stays",
                  "Starting to build routines, explore lifestyle shifts",
                ],
              },
              {
                title: "Digital Nomad",
                img: "/img/icon-04.svg",
                color: "#FF9500",
                quote: "“I live in different places for longer stretches.”",
                details: [
                  "Stays 2+ months in one place",
                  "Deals with visas, taxes, longer-term logistics",
                  "Builds deeper ties to each location",
                ],
              },
              {
                title: "Multi-Local",
                img: "/img/icon-05.svg",
                color: "#FC5B67",
                quote: "“I rotate between 2–4 home bases a year.”",
                details: [
                  "Creates a rhythm across locations",
                  "Maintains community and familiarity in each spot",
                  "Slower, more intentional travel",
                ],
              },
              {
                title: "Family First",
                img: "/img/icon-06.svg",
                color: "#8196CC",
                quote: "“We’re doing this with kids/family/loved ones.”",
                details: [
                  "Raise kids not taxes",
                  "Navigates education, housing, healthcare",
                  "Often blends decentralized learning with travel",
                  "Builds or joins family-friendly hubs",
                ],
              },
              {
                title: "The New Ecosystem",
                img: "/img/icon-07.svg",
                color: "#3DAA8D",
                extraQuote: `(Intergenerational) - Network Society`,
                quote: "“The remote life, across a full lifespan.”",
                details: [
                  "Still rare – few role models",
                  "Envisions communities with elders, families, and travelers",
                  "Blends wisdom, contribution, and movement",
                ],
              },
            ].map((stage, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center max-w-[260px]"
              >
                <Image
                  src={stage.img}
                  alt={stage.title}
                  width={100}
                  height={100}
                  className="mb-4 bg-transparent"
                />
                <h3
                  className="font-bold text-base text-carbon-Black mb-2 rounded-full inline-block py-1 w-[12rem]"
                  style={{ backgroundColor: stage.color }}
                >
                  {stage.title}
                </h3>
                <div className="w-[12rem]">
                  {stage.extraQuote && (
                    <div
                      className="text-sm font-bold text-carbon-Black mb-2"
                      dangerouslySetInnerHTML={{
                        __html: stage.extraQuote.replace(" - ", "<br />"),
                      }}
                    />
                  )}
                  <p className="text-sm font-semibold text-carbon-Black mb-2">
                    {stage.quote}
                  </p>
                  <ul className="text-sm text-carbon-Black list-none p-0 leading-snug">
                    {stage.details.map((point, i) => (
                      <li key={i} className="mb-[1rem]">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fine print */}
        <p className="text-center text-[0.75rem] text-gray-600 max-w-[67rem] mx-auto mt-6 leading-relaxed">
          Remote Life is bigger than your job or the passport stamps you
          collect. It’s not about being untethered, it’s about building new
          forms of stability, belonging to a movement and putting down roots in
          community hubs across the world.
        </p>

        {/* Quiz Section */}
        <section className="flex items-center justify-center bg-[#F4F1E6] px-4">
          <div
            className="bg-[#BBE4D7] py-12 px-4 sm:px-12 rounded-lg w-full"
            style={{ maxWidth: "68rem" }}
          >
            <div className="px-4 text-center font-Montserrat">
              <p className="text-md mx-auto pb-2 font-bold text-carbon-Black">
                Which stage are you in?
              </p>
              <h1 className="text-4xl font-display font-bold leading-tight drop-shadow-lg">
                Take The Quiz
              </h1>

              {/* ✅ Fillout popup embed */}
              <div
                ref={formRef}
                className="mt-6 px-4" // spacing from the heading
                data-fillout-id="sjtKeVoNG1us"
                data-fillout-embed-type="popup"
                data-fillout-dynamic-resize
                data-fillout-button-color="#FC5B67"
                data-fillout-button-size="large"
                data-fillout-inherit-parameters
                data-fillout-popup-size="medium"
              />
            </div>
          </div>
        </section>

        {/* Fine print */}
        <p className="text-center text-[0.75rem] text-gray-600 max-w-[67rem] mx-auto mt-6 leading-relaxed">
          No matter what stage you’re at in your remote life, Noma is always
          here to guide you on your journey. Book in a call with one of our
          Edition Advisors to discuss your ideal location and answer any
          questions you may have.
        </p>
      </div>

      {/* CTA */}
      <div className="flex justify-center mb-[7rem]">
        <button
          className="px-10 py-4 bg-[#3DAA8D] hover:bg-[#e24e5a] text-white font-bold text-lg rounded-full transition-all shadow-lg"
          onClick={() =>
            window.open(
              "https://lp.noma-collective.com/schedule-your-meeting-page",
              "_self"
            )
          }
        >
          BOOK IN A CALL
        </button>
      </div>
    </Layout>
  );
};

export default RemoteLife;
