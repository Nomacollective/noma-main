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
        src="//cdn.cookie-script.com/s/5c5d85780c76b22af355b1864d208ccd.js"
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
