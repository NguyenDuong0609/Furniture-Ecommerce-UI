import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import QueryProvider from "@/providers/query-provider";
import Header from "@/components/mobel/Header";
import Footer from "@/components/mobel/Footer";
import MobelScripts from "@/components/mobel/MobelScripts";
import PageLoader from "@/components/mobel/PageLoader";

export const metadata: Metadata = {
  title: "Mobel - Furniture Store",
  description: "Nền tảng chia sẻ kiến thức công nghệ và sản phẩm nội thất chất lượng cao",
  keywords: ["furniture", "sofas", "home decor", "e-commerce"],
  authors: [{ name: "Mobel" }],
  openGraph: {
    title: "Mobel - Furniture Store",
    description: "Nền tảng chia sẻ kiến thức công nghệ và sản phẩm nội thất chất lượng cao",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        {/* Mobile Web-app fullscreen */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/mobel/favicon.ico" />

        {/* Mobel Template CSS */}
        <link rel="stylesheet" href="/mobel/css/bootstrap.css" />
        <link rel="stylesheet" href="/mobel/css/animate.css" />
        <link rel="stylesheet" href="/mobel/css/font-awesome.css" />
        <link rel="stylesheet" href="/mobel/css/furniture-icons.css" />
        <link rel="stylesheet" href="/mobel/css/linear-icons.css" />
        <link rel="stylesheet" href="/mobel/css/magnific-popup.css" />
        <link rel="stylesheet" href="/mobel/css/owl.carousel.css" />
        <link rel="stylesheet" href="/mobel/css/ion-range-slider.css" />
        <link rel="stylesheet" href="/mobel/css/theme.css" />

        {/* Dark mode overrides */}
        <link rel="stylesheet" href="/mobel-dark-mode.css" />

      </head>
      <body className="font-sans">
        <PageLoader />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <div className="wrapper">
              <Header />
              {children}
              <Footer />
            </div>
          </QueryProvider>
        </ThemeProvider>

        <MobelScripts />
      </body>
    </html>
  );
}
