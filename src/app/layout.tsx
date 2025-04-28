import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          {children}
          <ReactQueryDevtools />
        </QueryProvider>
      </body>
    </html>
  );
}
