import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import QueryProvider from "@/components/QueryProvider";
import { ToastContainer } from "@/components/ui/toastContainer/ToastContainer";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";

export const metadata = {
  title: "Frame",
  description: "Frame",
  keywords: ["Frame", "Photo", "Gallery"],
  openGraph: {
    title: "Frame",
    description: "Frame",
    type: "website",
    locale: "ko_KR",
    siteName: "Frame",
    // images: [
    //   {
    //     url: "/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Frame",
    //   },
    // ],
  },
};

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
          <ToastContainer />
          <ReactQueryDevtools />
        </QueryProvider>
      </body>
    </html>
  );
}
