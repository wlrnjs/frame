import React from "react";
import Gnb from "@/components/layout/gnb/Gnb";
import ScrollToTop from "@/utils/dom/ScrollToTop";
import SmoothScrollWrapper from "@/utils/dom/SmoothScrollWrapper";
import Footer from "@/components/layout/footer/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Gnb />
      <ScrollToTop />
      <SmoothScrollWrapper>
        {children}
        <Footer />
      </SmoothScrollWrapper>
    </div>
  );
};

export default layout;
