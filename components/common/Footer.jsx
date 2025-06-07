import Link from "next/link";
import dynamic from "next/dynamic"; // ⬅️ IMPORTANT for dynamic import
import { FooterLine } from "./Icons";
import Image from "next/image";

// Dynamically import EmbeddedFormFooter with SSR disabled
const EmbeddedFormFooter = dynamic(() => import("./EmbeddFormFooter"), { ssr: false });

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
    <div>
      <div className='bg-cover bg-no-repeat bg-center mt-[-100px] bg-[url("/img/foterupperlayer.png")] h-[14vh] w-full ' />
      <div className="w-full bg-[#666] sm:h-[500px] -mt-1 md:h-[500px] px-4">
        <h1 className="text-center flex justify-center sm:text-5xl text-2xl font-bold p-1 text-[#FFFFFF]">
          Let’s Stay Connected
        </h1>

        {/* ✅ Dynamically loaded iframe component */}
        <EmbeddedFormFooter />

        <div className="py-4 sm:flex sm:flex-col sm:justify-center sm:items-center mt-4">
          <span className="max-w-full block sm:hidden py-6">
            <FooterLine />
          </span>

          <div className="sm:pl-0 sm:flex sm:justify-around sm:w-full max-w-[1000px]">
            <div className="column-uno text-white -mt-8 hidden sm:block">
              <Link href="/">
                <img
                  src="/img/high-res-logo.png"
                  width={150}
                  className="-ml-3"
                  alt="Noma Collective Logo"
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

            <div className="column-dos hidden sm:flex flex-col text-white order-1 sm:order-1">
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
              <div className="column-dos flex flex-col text-white order-1 sm:order-1">
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
    </div>
  );
};

export default Footer;
