import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import type { Metadata } from "next";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

const englishMetadata: Metadata = {
  metadataBase: new URL("https://webrarium.com"),
  title: "Webrarium | We create digital solutions",
  description:
    "Website development, chatbot development, marketing automation, product design, digital advertising.",
  openGraph: {
    images: "/OpenGraph_Eng.jpg",
  },
  alternates: {
    canonical: "/en",
    languages: {
      uk: "/",
      en: "/en",
    },
  },
};
const ukrMetadata: Metadata = {
  metadataBase: new URL("https://webrarium.com"),
  title: "Webrarium | Створюємо цифрові рішення",
  description:
    "Створення сайтів, розробка чат-ботів, автоматизація маркетингу, продуктовий дизайн, цифрова реклама",
  openGraph: {
    images: "/OpenGraph_UA.jpg",
  },
  alternates: {
    canonical: "/",
    languages: {
      uk: "/",
      en: "/en",
    },
  },
};

storyblokInit({
  // accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

export async function generateMetadata({ params }: any) {
  return params.locale === "en" ? englishMetadata : ukrMetadata;
}

interface HomeProps {
  params: {
    locale: string;
  };
}

export default async function Home({ params: { locale } }: HomeProps) {
  try {
    const { data } = await fetchData(locale);
    return <StoryblokStory story={data.story} />;
  } catch {
    return notFound(); // Повертає сторінку 404;
  }
}
async function fetchData(locale: string) {
  let sbParams: {
    version: "published" | "draft";
    language: any;
    resolve_relations: any;
  } = {
    version: "draft",
    language: locale,
    resolve_relations: [
      "projects_grid.projects_list,services_grid.services_list",
    ],
  };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, {
    cache: "no-store",
  });
}
