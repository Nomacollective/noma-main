import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import { GoogleTagManager } from "@next/third-parties/google";

const Layout = ({ children }) => {
  return (
    <>
      <script
        type="text/javascript"
        charSet="UTF-8"
        src="//cdn.cookie-script.com/s/e28166a6cec87c8d411cf6eb7ada29f7.js"
      ></script>
      <GoogleTagManager gtmId="GTM-WRZZGKJ" />
      <Navbar />
      {children}
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
