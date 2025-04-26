import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

const Layout = ({ children }) => {
  return (
    <>
      {/* Cookie script */}
      <script
        type="text/javascript"
        charSet="UTF-8"
        src="//cdn.cookie-script.com/s/5c5d85780c76b22af355b1864d208ccd.js"
      ></script>

      {/* Google Analytics 4 snippet */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-JMJYWRYQCG"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JMJYWRYQCG');
          `,
        }}
      />

      <Navbar />
      {children}
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
