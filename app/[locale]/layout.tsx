import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/app/components/StoryblokComponents/StoryblokProvider";
import { i18nConfig } from "@/i18nConfig";
import type { Viewport } from "next";

type PageParams = {
  locale: string;
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webrarium Next App",
  description: "We Webrarium",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export async function generateStaticParams(): Promise<PageParams[]> {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: PageParams;
}>) {
  return (
    <StoryblokProvider>
      <html lang={locale}>
        <body>
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />
        </body>
      </html>
    </StoryblokProvider>
  );
}
