import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import Gnb from "@/components/gnb/Gnb";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/utils/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <ScrollToTop />
          <Gnb />
          {children}
          <Footer />
          <ReactQueryDevtools />
        </QueryProvider>
      </body>
    </html>
  );
}
