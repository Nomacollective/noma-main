import "@/styles/globals.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Script id="trengo-chatbot" strategy="beforeInteractive">
        {`
          window.Trengo = window.Trengo || {};
          window.Trengo.key = 'FsP7tqsrJ3mf4VdDMISR';
          (function(d, script, t) {
              script = d.createElement('script');
              script.type = 'text/javascript';
              script.async = true;
              script.src = 'https://static.widget.trengo.eu/embed.js';
              d.getElementsByTagName('head')[0].appendChild(script);
          }(document));
        `}
      </Script> */}

      <Component {...pageProps} />
    </>
  );
}
