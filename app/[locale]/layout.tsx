import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/app/components/StoryblokComponents/StoryblokProvider";
import { i18nConfig } from "@/i18nConfig";
import type { Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

type PageParams = {
  locale: string;
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webrarium.com"),
  title:
    "Webrarium | Створюємо цифрові рішення, що допомагають вашому бізнесу зростати",
  description:
    "Створення сайтів, розробка чат-ботів, автоматизація маркетингу, продуктовий дизайн, цифрова реклама",
  openGraph: {
    images: "/Webrarium_Cover-open-graph_UA.webp",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Webrarium",
  image: "https://webrarium.com/Webrarium_Cover-open-graph_UA.jpg",
  description:
    "Створення сайтів, розробка чат-ботів, автоматизація маркетингу, продуктовий дизайн, цифрова реклама",
  email: "wewebrarium@gmail.com",
  logo: "https://a.storyblok.com/f/276513/140x16/0ee6252073/webrarium-logo.svg",
  telephone: "+38 073 979 79 54",
};
export async function generateStaticParams(): Promise<PageParams[]> {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: PageParams;
}) {
  return (
    <StoryblokProvider>
      <html lang={locale}>
        <body>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />
        </body>
        <GoogleAnalytics gaId="G-J8ZW4RCXNG" />
      </html>
    </StoryblokProvider>
  );
}
