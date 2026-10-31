import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono, Cairo } from "next/font/google";
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

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  ...createMetadata({
    path: "/",
  }),
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/logo.svg",
  },
  verification: {
    google: "-icZ7O-6xbgU22W9_PdWb1fhMb2_F8c1JCm1vrHB-6g",
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
      className={`${spaceGrotesk.variable} ${geistMono.variable} ${cairo.variable} h-full antialiased dark`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('barq-theme-v2');var l=localStorage.getItem('barq-locale');document.documentElement.classList.remove('light','dark');document.documentElement.classList.add(t==='light'?'light':'dark');if(l==='en'){document.documentElement.lang='en';document.documentElement.dir='ltr';}else{document.documentElement.lang='ar';document.documentElement.dir='rtl';}}catch(e){document.documentElement.classList.remove('light','dark');document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-background text-foreground"
        suppressHydrationWarning
      >
        <AppProvider>
          <OrganizationJsonLd />
          <WebSiteJsonLd />
          <ScrollProgress />
          <LoadingScreen />
          <Navbar />
          <main className="flex-1 pb-16 sm:pb-0">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <WhatsAppButton />
        </AppProvider>
      </body>
    </html>
  );
}
