import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import Gnb from "@/components/gnb/Gnb";

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
          <ReactQueryDevtools />
        </QueryProvider>
      </body>
    </html>
  );
}
