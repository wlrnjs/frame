import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import Gnb from "@/components/gnb/Gnb";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/utils/ScrollToTop";
import { ToastContainer } from "@/components/toastContainer/ToastContainer";

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
          {children}
          <Footer />
          <ToastContainer />
          <ReactQueryDevtools />
        </QueryProvider>
      </body>
    </html>
  );
}
