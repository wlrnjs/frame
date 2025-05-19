import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import QueryProvider from "@/components/QueryProvider";
import Gnb from "@/components/layout/gnb/Gnb";
import Footer from "@/components/layout/footer/Footer";
import ScrollToTop from "@/utils/dom/ScrollToTop";
import SmoothScrollWrapper from "@/utils/dom/SmoothScrollWrapper";
import { ToastContainer } from "@/components/ui/toastContainer/ToastContainer";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";

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
