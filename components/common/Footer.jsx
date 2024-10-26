import Link from "next/link";
import React, { useState } from "react";
import { FooterLine, LogoIcon } from "./Icons";
import SignUpModal from "./SignUpModal";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.instagram.com/nomacollectivehq",
    src: "/img/socials/instagram.png",
    alt: "Instagram",
  },
  {
    href: "https://www.facebook.com/nomacollectiveHQ/",
    src: "/img/socials/facebook.png",
    alt: "Facebook",
  },
  {
    href: "https://twitter.com/noma_collective?lang=en",
    src: "/img/socials/twitter.png",
    alt: "Twitter",
  },
  {
    href: "https://www.linkedin.com/company/nomacollective",
    src: "/img/socials/linkedin.png",
    alt: "LinkedIn",
  },
  {
    href: "https://www.tiktok.com/@nomacollective",
    src: "/img/socials/tiktok.png",
    alt: "TikTok",
  },
  {
    href: "https://www.youtube.com/channel/UCi_aI11Tz4u8JZMLoF2UMGQ",
    src: "/img/socials/youtube.png",
    alt: "YouTube",
  },
];

const Footer = () => {
  return (
    <div className="">
      <div className='bg-cover bg-no-repeat bg-center mt-[-100px] bg-[url("/img/foterupperlayer.png")] h-[14vh] w-full ' />
      <div className="w-full bg-[#666] sm:h-[500px] -mt-1 md:h-[500px] px-4">
        <h1 className="text-center flex justify-center heading p-1 text-[#FFFFFF]">
          Sing up for our mailer
        </h1>
        <div className="bg-[#666666] h-[250px]">
          <iframe
            src="https://link.jbenquet.com/widget/form/SO8up6ErSbXX2VnWL3BX"
            className="w-full h-full border-none rounded-[36px]"
            width="100%"
            id="inline-SO8up6ErSbXX2VnWL3BX"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Footer"
            data-height="400"
            data-layout-iframe-id="inline-SO8up6ErSbXX2VnWL3BX"
            data-form-id="SO8up6ErSbXX2VnWL3BX"
            title="Footer"
          ></iframe>
          <script src="https://link.jbenquet.com/js/form_embed.js"></script>
        </div>
        <div className="py-4 sm:flex sm:flex-col sm:justify-center sm:items-center mt-4">
          {/* <p className="text-white text-center font-sergio-trendy text-2xl sm:text-4xl leading-[120%] font-extrabold mb-4 sm:mb-0">
            Sign up for our mailer
          </p>
          <div className="mb-4 sm:mb-8">
            <div className="sm:hidden flex justify-between items-center gap-3">
              <input
                type="text"
                placeholder="Name"
                className=" px-4 py-2 border rounded-full text-gray-700 focus:outline-none focus:border-blue-500 max-w-[550px] w-full"
              />
              <input
                type="text"
                placeholder="Last name"
                className=" px-4 py-2 border rounded-full text-gray-700 focus:outline-none focus:border-blue-500 max-w-[550px] w-full"
              />
            </div>
            <div className="flex justify-center gap-2 mt-2">
              <input
                type="text"
                placeholder="Email"
                className=" px-4 py-2 border rounded-full text-gray-700 focus:outline-none focus:border-blue-500 max-w-[550px] w-full"
              />
              <button
                onClick={handleOpenModal}
                className="hidden sm:flex p-2 max-w-[141px] w-full h-[42px] items-center justify-center bg-main-orange rounded-[28px] text-white text-base font-extrabold leading-normal hover:text-main-orange hover:bg-transparent transition duration-300 ease-in-out  border border-main-orange"
              >
                LET'S CONNECT
              </button>
            </div>
            <p className="text-xs mt-2 px-2" style={{ color: "#C4C4C4" }}>
              Submitting this forms means you opt in to receive communication
              from us and read about our latest updates. You can unsubscribe at
              any time.
            </p>{" "}
          </div>
          <button
            onClick={handleOpenModal}
            className="flex sm:hidden m-auto p-2 w-[182px] h-[42px] items-center justify-center bg-main-orange rounded-[28px] text-white text-base font-extrabold leading-normal hover:text-main-orange hover:bg-transparent transition duration-300 ease-in-out  border border-main-orange mb-6"
          >
            SUBMIT
          </button> */}

          <span className=" max-w-full block sm:hidden py-6">
            <FooterLine />
          </span>
          <div className="sm:pl-0 sm:flex sm:justify-around sm:w-full max-w-[1000px]">
            <div className="column-uno text-white -mt-8 hidden sm:block">
              <Link href="/">
                <img
                  src="/img/high-res-logo.png"
                  width={150}
                  className="-ml-3"
                />
              </Link>
              <div className="flex gap-2 mb-2 -mt-8">
                {socialLinks.map(({ href, src, alt }) => (
                  <Link key={href} href={href}>
                    <Image
                      src={src}
                      alt={alt}
                      height={16}
                      width={16}
                      className="h-[16px] w-[16px]"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="column-dos hidden sm:flex flex-col text-white mb-2 order-2 sm:order-1 text-right sm:text-center">
              <Link href="/location">LOCATIONS</Link>
              <Link href="/how-it-works">HOW IT WORKS</Link>
              <Link href="/news">WHAT'S NEW</Link>
              <Link
                href="https://lp.noma-collective.com/schedule-your-meeting-page"
                className="font-bold"
              >
                BOOK A CALL
              </Link>
            </div>
            <div className="column-dos hidden sm:flex flex-col text-white order-1 sm:order-1 ">
              <Link href="/faqs">FAQ</Link>
              <Link href="/terms-conditions">TERMS & CONDITIONS</Link>
              <Link href="/privacy-policy">PRIVACY POLICY</Link>
              <Link href="/contact-us">CONTACT US</Link>
            </div>
            <div className="sm:hidden flex justify-between">
              <div className="column-dos flex flex-col text-white mb-2 order-2 sm:order-1 text-right sm:text-center">
                <Link href="/location">LOCATIONS</Link>
                <Link href="/how-it-works">HOW IT WORKS</Link>
                <Link href="/news">WHAT'S NEW</Link>
                <Link
                  href="https://lp.noma-collective.com/schedule-your-meeting-page"
                  className="font-bold"
                >
                  BOOK A CALL
                </Link>
              </div>
              <div className="column-dos flex flex-col text-white order-1 sm:order-1 ">
                <Link href="/faqs">FAQ</Link>
                <Link href="/terms-conditions">TERMS & CONDITIONS</Link>
                <Link href="/privacy-policy">PRIVACY POLICY</Link>
                <Link href="/contact-us">CONTACT US</Link>
              </div>
            </div>

            <div className="sm:hidden flex justify-center items-center gap-8 mt-8 mb-5">
              {socialLinks.map(({ href, src, alt }) => (
                <Link key={href} href={href}>
                  <Image
                    src={src}
                    alt={alt}
                    height={16}
                    width={16}
                    className="h-[16px] w-[16px]"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <SignUpModal isClose={handleCloseModal} isOpen={isModalOpen} /> */}
    </div>
  );
};

export default Footer;
