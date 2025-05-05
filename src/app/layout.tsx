import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import Gnb from "@/components/gnb/Gnb";
import Footer from "@/components/footer/Footer";

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
          {children}
          <Footer />
          <ReactQueryDevtools />
        </QueryProvider>
      </body>
    </html>
  );
}
