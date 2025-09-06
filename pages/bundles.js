import Image from "next/image";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import { useRef } from "react";
import Button  from "@/components/common/CommonButton";
import FeaturedEditionSectionSlider from "@/components/home/FeaturedEditionSectionSlider";
import { getFeaturedEditions } from "@/lib/api";

export async function getServerSideProps() {
  const locations = await getFeaturedEditions();
  return {
    props: {
      locations: locations?.contentTypeLocationCollection?.items || [],
    },
  };
}

const Bundles = ({ locations }) => {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const scrollAmount = 300;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <Layout>
      <PageSEO title="Team Retreat Bundles" />

      {/* HERO SECTION */}
      <section className="block md:hidden px-4 mt-[7px]">
        <div
          className="w-full bg-center bg-cover h-[282px] sm:h-[582px] rounded-lg relative"
          style={{
            backgroundImage: "url('/img/truck.svg')",
            backgroundPosition: "center bottom",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-3xl font-display font-bold leading-tight drop-shadow-lg">
              Travel More For Less
              <br />
              With Noma Bundles
            </h1>
          </div>
        </div>
      </section>

      {/* Desktop View */}
      <section className=" font-Montserrat relative w-full h-[80vh] hidden md:block h-[282px] sm:h-[582px]">
        <Image
          src="/img/truck.svg"
          alt="Truck Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight drop-shadow-lg">
            Travel More For Less
            <br />
            With Noma Bundles
          </h1>
        </div>
      </section>

      {/* SECOND HERO SECTION */}
      <section className="bg-[#FDF6E9] py-4 md:py-20 px-4 md:px-6 w-full mx-auto">
        <div className=" font-Montserrat flex flex-col items-center md:flex-row md:items-start">
          {/* Text Block */}
          <div
            className="md:w-1/2 text-center md:text-left pt-10 md:pt-16"
            style={{ paddingLeft: "10rem" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 font-display">
              Your Ticket To
              <br />
              See Even More
              <br />
              Of The World
            </h1>
            <p className="text-base sm:text-md text-gray-800 mb-4 max-w-md mx-auto md:mx-0">
              Introducing Noma Bundles, special Edition packages designed with
              every traveler in mind. So whether you’re just dipping your toe in
              or diving head first into year-round adventure, we’ve got a Bundle
              that suits your needs.
            </p>
            <p className="text-base sm:text-md font-bold text-black mb-6 max-w-md mx-auto md:mx-0">
              Living your very best location independent life has never been
              easier!
            </p>
          </div>

          {/* Hero Image */}
          <div
            className="md:w-1/2 relative pt-12 -ml-0 md:-ml-16"
            style={{ marginLeft: "-8rem" }}
          >
            <Image
              src="/img/bundle.png"
              alt="Bundles Hero Image"
              width={550}
              height={650}
              className="drop-shadow-xl mx-auto"
            />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            className=" font-Montserrat px-8 py-3 bg-[#FC5B67] hover:bg-[#e24e5a] text-white font-bold text-lg rounded-full transition-all shadow-lg"
            onClick={() =>
              window.open(
                "https://lp.noma-collective.com/schedule-your-meeting-page",
                "_self"
              )
            }
          >
            SECURE YOUR BUNDLE
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#FFE7E7] py-16 px-4 text-center font-Montserrat">
        <h2 className=" font-Montserrat text-3xl font-bold text-carbon-Black mb-6">
          How It Works
        </h2>

        <p
          className="font-semibold text-base mb-4 mx-auto text-carbon-Black"
          style={{ maxWidth: "41rem" }}
        >
          Save as you go – the more trips you book at once, the bigger your
          total savings.
        </p>
        <p
          className="text-sm mb-3 mx-auto text-carbon-Black"
          style={{ maxWidth: "41rem" }}
        >
          Let us put our mathematician brain on for a second to break down how
          our Bundles work.
        </p>
        <p
          className="text-sm mb-3 mx-auto text-carbon-Black "
          style={{ maxWidth: "41rem" }}
        >
          Each trip unlocks a specific discount e.g. booking three trips will
          save you $200.
        </p>
        <p className="text-sm mx-auto text-carbon-Black">
          BUT, our Bundles are cumulative, so let’s say you want to book 6 trips
          at once, you would unlock a $350 discount PLUS the discounts from trip
          2, 3, 4 and 5!
        </p>

        {/* MOBILE: Pills + = + $900 (all OUTSIDE white box) */}
        <div className="md:hidden mt-6 space-y-3 max-w-sm mx-auto font-Montserrat">
          <div className="bg-[#FFF5EB] text-black font-semibold px-4 py-2 rounded-full text-sm w-fit mx-auto">
            2 trips ($150)
          </div>
          <div className="text-black font-bold text-lg">+</div>
          <div className="bg-[#C5F0E0] text-black font-semibold px-4 py-2 rounded-full text-sm w-fit mx-auto">
            3 trips ($200)
          </div>
          <div className="text-black font-bold text-lg">+</div>
          <div className="bg-[#C7D7FF] text-black font-semibold px-4 py-2 rounded-full text-sm w-fit mx-auto">
            4 trips ($250)
          </div>
          <div className="text-black font-bold text-lg">+</div>
          <div className="bg-[#FFDA00] text-black font-semibold px-4 py-2 rounded-full text-sm w-fit mx-auto">
            5 trips ($300)
          </div>
          <p className="text-2xl font-bold mt-2 text-black">
            = <br />
            <span className="text-black">$900 in savings!</span>
          </p>
        </div>

        {/* SHARED CONTAINER */}
        <div
          className=" font-Montserrat bg-[#FFFDF4] mt-6 px-4 py-4 pb-8 md:px-8 md:py-8 mx-auto rounded-3xl shadow flex flex-col items-center"
          style={{ width: "68rem" }}
        >
          {/* DESKTOP PILLS (ONLY VISIBLE ON MD+) */}
          <div className="hidden md:flex flex-wrap justify-center gap-4 mb-4">
            <div className="bg-[#FFD9D9] text-black font-semibold px-4 py-2 rounded-full text-sm">
              2 trips ($150)
            </div>
            <div className="text-black font-bold text-lg px-8">+</div>
            <div className="bg-[#C5F0E0] text-black font-semibold px-4 py-2 rounded-full text-sm">
              3 trips ($200)
            </div>
            <div className="text-black font-bold text-lg px-8">+</div>
            <div className="bg-[#C7D7FF] text-black font-semibold px-4 py-2 rounded-full text-sm">
              4 trips ($250)
            </div>
            <div className="text-black font-bold text-lg px-8">+</div>
            <div className="bg-[#FFDA00] text-black font-semibold px-4 py-2 rounded-full text-sm">
              5 trips ($300)
            </div>
          </div>

          {/* DESKTOP Savings message */}
          <p className="font-Montserrat hidden md:block text-2xl font-bold mt-2 text-black">
            = <br />
            <br />
            <span className="text-black">$900 in savings!</span>
          </p>

          {/* Alumni bonus */}
          <p className="mt-4 font-semibold text-sm max-w-lg md:max-w-[46rem] mx-auto text-black md:font-semibold font-bold font-Montserrat">
            PLUS – if you’re an alumni, you’ll still get that
            <span className="md:bg-[#FF7A84] md:text-white text-[#FF7A84] md:px-2 md:py-1 md:rounded-full mx-1">
              alumni discount
            </span>
            added per trip. We really do spoil you.
          </p>
        </div>

        {/* Fine print */}
        <p className="text-[0.50rem] text-gray-600 italic max-w-[67rem] mx-auto mt-6 leading-relaxed">
          Editions must all be booked at the same time to claim Bundle discount.
          If no accommodation is live, a $500 deposit will be required. Requests
          to transfer deposits to other Editions is possible with no extra
          charge, at the discretion of the Noma team. Alumni discount is
          applicable on Bundles however it is not to be used in conjunction with
          any other offers, credit or discounts.
        </p>
      </section>

      {/* BUNDLE TYPES */}
      <section className="pt-1 pb-4 px-4 md:px-0 bg-[#FDF6E9] w-full mx-auto">
        <div className="relative mb-12">
          {/* Flower (hide on mobile) */}
          <div className="absolute left-0 -mt-1 hidden md:block">
            <Image
              src="/img/flower.svg"
              alt="Bundles Hero Image"
              width={80}
              height={80}
              className="drop-shadow-xl"
            />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-black text-center pt-16">
            Noma Bundles
          </h2>
        </div>

        {/* MOBILE CAROUSEL */}
        {/* MOBILE CAROUSEL */}
        <div className="relative md:hidden">
          {/* Left Chevron */}
          <button
            className="absolute left-[-0.5rem] top-1/2 transform -translate-y-1/2 z-10 p-1"
            onClick={() => {
              const el = document.getElementById("mobile-bundles-scroll");
              el?.scrollBy({ left: -300, behavior: "smooth" });
            }}
          >
            <Image
              src="/img/red-chevron-left.svg"
              alt="Left"
              width={24}
              height={24}
            />
          </button>

          {/* Right Chevron */}
          <button
            className="absolute right-[-0.5rem] top-1/2 transform -translate-y-1/2 z-10 p-1"
            onClick={() => {
              const el = document.getElementById("mobile-bundles-scroll");
              el?.scrollBy({ left: 300, behavior: "smooth" });
            }}
          >
            <Image
              src="/img/red-chevron-right.svg"
              alt="Right"
              width={24}
              height={24}
            />
          </button>

          {/* Scrollable Cards */}
          <div
            id="mobile-bundles-scroll"
            className="flex overflow-x-auto snap-x snap-mandatory gap-12 px-8 scrollbar-hide scroll-smooth"
          >
            {[...Array(3)].map((_, index) => {
              const bundles = [
                {
                  title: "Test Drive",
                  bg: "#D7E3FF",
                  savings: [
                    "1 trip - full price",
                    "2 trip - $150",
                    "3 trip - $200",
                  ],
                  total: "$350",
                },
                {
                  title: "Long Haul",
                  bg: "#D6F3E7",
                  savings: ["4 trip - $250", "5 trip - $300", "6 trip - $350"],
                  total: "$1,250",
                },
                {
                  title: "World Tour",
                  bg: "#FFE7A0",
                  savings: ["7 trip - $400", "8 trip - $450", "9 trip - $900"],
                  total: "$3,000",
                  badge: "Best Value",
                },
              ];

              const b = bundles[index];
              return (
                <div
                  key={b.title}
                  className={`rounded-2xl p-6 shadow text-center snap-center shrink-0 w-[96%] mx-auto`}
                  style={{
                    backgroundColor: b.bg,
                    border: b.badge ? "2px solid #FF7A00" : undefined,
                  }}
                >
                  <h3 className="bg-[#FFF4E1] font-bold text-xl rounded-full py-1 mb-1">
                    {b.title}
                  </h3>
                  {b.badge && (
                    <p className="text-[#FF7A00] font-bold text-sm mb-2 uppercase">
                      {b.badge}
                    </p>
                  )}
                  <p className="font-semibold mb-2">Traveler Profile</p>
                  <p className="text-sm mb-4">
                    {index === 0 &&
                      "Are you a first-time nomad looking to dip your toe into adventure or maybe you’ve settled down a little, but still crave a bit of adventure each year?"}
                    {index === 1 &&
                      "You remembered you’ve got free will and now you’re making the most of it by working from anywhere you want."}
                    {index === 2 &&
                      "Permanent address, who? This bundle is for those who are committed to the flights-not-feelings lifestyle and keeping their loved ones on their toes."}
                  </p>
                  <p className="font-semibold mb-2">Savings</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {b.savings.map((item) => (
                      <span
                        key={item}
                        className="bg-white px-4 py-1 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-semibold mb-2">
                    Total savings if you complete the Bundle
                  </p>
                  <p className="text-white text-xl font-bold bg-[#FF7A84] px-4 py-2 rounded-full inline-block w-fit mx-auto">
                    {b.total}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            <span className="w-3 h-3 bg-[#333] rounded-full"></span>
            <span className="w-3 h-3 bg-[#ccc] rounded-full"></span>
            <span className="w-3 h-3 bg-[#ccc] rounded-full"></span>
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Test Drive */}
          <div className="font-Montserrat bg-[#D7E3FF] rounded-2xl p-6 shadow text-center">
            <h3 className="bg-[#FFF4E1] font-bold text-xl rounded-full py-1 mb-3">
              Test Drive
            </h3>
            <p className="font-semibold mb-2">Traveler Profile</p>
            <p className="text-sm mb-4">
              Are you a first-time nomad looking to dip your toe into adventure
              or maybe you’ve settled down a little, but still crave a bit of
              adventure each year?
            </p>
            <p className="font-semibold mb-2">Savings</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="bg-white px-4 py-1 rounded-full text-sm">
                1 trip - full price
              </span>
              <span className="bg-white px-4 py-1 rounded-full text-sm">
                2 trip - $150
              </span>
              <span className="bg-white px-4 py-1 rounded-full text-sm">
                3 trip - $200
              </span>
            </div>
            <p className="text-sm font-semibold mb-2 mt-[2rem] mb-[1rem]">
              Total savings if you complete the Bundle
            </p>
            <p className="text-white text-xl font-bold bg-[#FF7A84] py-2 rounded-full w-[6rem] mx-auto">
              $350
            </p>
          </div>

          {/* Long Haul */}
          <div className="font-Montserrat bg-[#D6F3E7] rounded-2xl p-6 shadow text-center">
            <h3 className="bg-[#FFF4E1] font-bold text-xl rounded-full py-1 mb-3">
              Long Haul
            </h3>
            <p className="font-semibold mb-2">Traveler Profile</p>
            <p className="text-sm mb-4">
              You remembered you’ve got free will and now you’re making the most
              of it by working from anywhere you want.
            </p>
            <p className="font-semibold mb-2 mt-[2.25rem]">Savings</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="bg-white px-4 py-1 rounded-full text-sm">
                4 trip - $250
              </span>
              <span className="bg-white px-4 py-1 rounded-full text-sm">
                5 trip - $300
              </span>
              <span className="bg-white px-4 py-1 rounded-full text-sm">
                6 trip - $350
              </span>
            </div>
            <p className="text-sm font-semibold mb-[1rem] mt-[2rem]">
              Total savings if you complete the Bundle
            </p>
            <p className="text-white text-xl font-bold bg-[#FF7A84] py-2 rounded-full w-[6rem] mx-auto">
              $1,250
            </p>
          </div>

          {/* World Tour */}
          <div className="font-Montserrat bg-[#FFE7A0] rounded-2xl p-6 shadow text-center border-2 border-[#FF7A00]">
            <h3 className="bg-[#FFF4E1] font-bold text-xl rounded-full py-1 mb-1">
              World Tour
            </h3>
            <p className="text-[#FF7A00] font-bold text-sm mb-2 uppercase">
              Best Value
            </p>
            <p className="font-semibold mb-2">Traveler Profile</p>
            <p className="text-sm mb-4">
              Permanent address, who? This bundle is for those who are committed
              to the flights-not-feelings lifestyle and keeping their loved ones
              on their toes.
            </p>
            <p className="font-semibold mb-2">Savings</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="bg-white px-4 py-1 rounded-full text-sm">
                7 trip - $400
              </span>
              <span className="bg-white px-4 py-1 rounded-full text-sm">
                8 trip - $450
              </span>
              <span className="bg-white px-4 py-1 rounded-full text-sm">
                9 trip - $900
              </span>
            </div>
            <p className="text-sm font-semibold mb-2">
              Total savings if you complete the Bundle
            </p>
            <p className="text-white text-xl font-bold bg-[#FF7A84] py-2 rounded-full w-[6rem] mx-auto">
              $3,000
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16 pb-8 px-4">
          <button
            className=" font-Montserrat w-full max-w-md md:w-auto px-10 py-4 bg-[#FF7A00] hover:bg-[#e96e00] text-white font-bold text-lg rounded-full transition-all shadow-lg"
            onClick={() =>
              window.open(
                "https://lp.noma-collective.com/schedule-your-meeting-page",
                "_self"
              )
            }
          >
            SECURE YOUR BUNDLE
          </button>
        </div>
      </section>

      {/*Feature Editions*/}
      <section className="pt-1 pb-16 px-4 md:px-0 bg-[#FDF6E9] w-full mx-auto">
        <div className="relative mb-12">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-black text-center">
           Featured Editions Section
          </h2>
        </div>

        <FeaturedEditionSectionSlider locations={locations} />
        {/* CTA */}
        <div className="flex justify-center mt-16 pb-8 px-4">
          <div className="block">
            <Button text="SEE ALL TRIPS" link="/location" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bundles;
