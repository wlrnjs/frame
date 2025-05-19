import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import QueryProvider from "@/components/QueryProvider";
import Gnb from "@/components/gnb/Gnb";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/utils/dom/ScrollToTop";
import { ToastContainer } from "@/components/toastContainer/ToastContainer";
import SmoothScrollWrapper from "@/utils/dom/SmoothScrollWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <Gnb />
          <ScrollToTop />
          <SmoothScrollWrapper>
            {children}
            <Footer />
          </SmoothScrollWrapper>
          <ToastContainer />
          <ReactQueryDevtools />
        </QueryProvider>
      </body>
    </html>
  );
}
