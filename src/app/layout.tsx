import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_Arabic } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { PageTransition } from "@/components/layout/page-transition";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/shared/json-ld";
import { AppProvider } from "@/providers/app-provider";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  ...createMetadata({}),
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${notoArabic.variable} h-full antialiased dark`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('vh-theme');var l=localStorage.getItem('vh-locale');if(t==='light'||t==='dark'){document.documentElement.classList.remove('light','dark');document.documentElement.classList.add(t);}if(l==='en'){document.documentElement.lang='en';document.documentElement.dir='ltr';}else{document.documentElement.lang='ar';document.documentElement.dir='rtl';}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <AppProvider>
          <OrganizationJsonLd />
          <WebSiteJsonLd />
          <ScrollProgress />
          <LoadingScreen />
          <Navbar />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <WhatsAppButton />
        </AppProvider>
      </body>
    </html>
  );
}
