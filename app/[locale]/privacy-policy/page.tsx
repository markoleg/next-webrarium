import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import type { Metadata } from "next";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

const englishMetadata: Metadata = {
  metadataBase: new URL("https://webrarium.com"),
  title: "Webrarium | Privacy Policy",
  description: "Privacy Policy",
  openGraph: {
    images: "/Webrarium_Cover-open-graph.webp",
  },
  alternates: {
    canonical: "/en/privacy-policy",
    languages: {
      uk: "/privacy-policy",
      en: "/en/privacy-policy",
    },
  },
};
const ukrMetadata: Metadata = {
  metadataBase: new URL("https://webrarium.com"),
  title: "Webrarium | Політика конфіденційності",
  description: "Політика конфіденційності",
  openGraph: {
    images: "/Webrarium_Cover-open-graph_UA.webp",
  },
  alternates: {
    canonical: "/privacy-policy",
    languages: {
      uk: "/privacy-policy",
      en: "/en/privacy-policy",
    },
  },
};

// storyblokInit({
//   accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
//   use: [apiPlugin],
// });
export async function generateMetadata({ params: { locale } }: any) {
  const pageSlug = "privacy-policy";
  const rawSeoData = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/${pageSlug}?version=draft&token=${process.env.STORYBLOK_ACCESS_TOKEN}&language=${locale}`
  );
  const seoData = await rawSeoData.json();

  const Metadata: Metadata = {
    title:
      seoData.story.content.title ||
      (locale === "en"
        ? "Webrarium | We create digital solutions"
        : "Webrarium | Створюємо цифрові рішення"),
    description:
      seoData.story.content.description ||
      (locale === "en"
        ? "Website development, chatbot development, marketing automation, product design, digital advertising."
        : "Створення сайтів, розробка чат-ботів, автоматизація маркетингу, продуктовий дизайн, цифрова реклама"),
    openGraph: {
      images:
        seoData.story.content.og_image?.filename ||
        (locale === "en" ? "/OpenGraph_Eng.jpg" : "/OpenGraph_UA.jpg"),
    },
    alternates: {
      canonical: locale === "en" ? `/en/${pageSlug}` : `/${pageSlug}`,
      languages: {
        uk: `/${pageSlug}`,
        en: `/en/${pageSlug}`,
      },
    },
  };
  return Metadata;
  // return params.locale === "en" ? englishMetadata : ukrMetadata;
}

export default async function PrivacyPolicyPage({ params: { locale } }: any) {
  const { data } = await fetchData(locale);

  return <StoryblokStory story={data.story} />;
}

async function fetchData(locale: string) {
  let sbParams: {
    version: "published" | "draft";
    language: any;
  } = { version: "draft", language: locale };

  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/privacy-policy`, sbParams, {
    // cache: "no-store",
    next: {
      revalidate: 60,
    },
  });
}
