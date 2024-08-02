import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/app/components/StoryblokComponents/StoryblokProvider";
import { i18nConfig } from "@/i18nConfig";
import type { Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import CalBlock from "@/app/components/CalBlock";
import CaptchaProvider from "../components/CaptchaProvider";

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
    images: "/OpenGraph_UA.jpg",
  },
  // robots: "nosnippet",
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
  description:
    "Створення сайтів, розробка чат-ботів, автоматизація маркетингу, продуктовий дизайн, цифрова реклама",
  image: "https://webrarium.com/OpenGraph_UA.jpg",
  email: "wewebrarium@gmail.com",
  logo: "https://a.storyblok.com/f/276513/140x16/0ee6252073/webrarium-logo.svg",
  telephone: "+38 073 979 79 54",
};
const jsonLdEn = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Webrarium",
  description:
    "Website development, chatbot development, marketing automation, product design, digital advertising.",
  image: "https://webrarium.com/OpenGraph_Eng.jpg",
  email: "wewebrarium@gmail.com",
  logo: "https://a.storyblok.com/f/276513/140x16/0ee6252073/webrarium-logo.svg",
  telephone: "+38 073 979 79 54",
};
// export async function generateStaticParams(): Promise<PageParams[]> {
//   return i18nConfig.locales.map((locale) => ({ locale }));
// }

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
            dangerouslySetInnerHTML={
              locale === "en"
                ? { __html: JSON.stringify(jsonLdEn) }
                : { __html: JSON.stringify(jsonLd) }
            }
          />
          <CalBlock />
          <Header locale={locale} />
          <CaptchaProvider>{children}</CaptchaProvider>
          <Footer locale={locale} />
        </body>
        <GoogleAnalytics gaId="G-J8ZW4RCXNG" />
      </html>
    </StoryblokProvider>
  );
}
