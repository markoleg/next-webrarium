import {
  apiPlugin,
  getStoryblokApi,
  storyblokInit,
} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import type { Metadata } from "next";

const englishMetadata: Metadata = {
  title: "Projects | Webrarium",
  // description:
  //   "Website development, chatbot development, marketing automation, product design, digital advertising.",
  // openGraph: {
  //   images: "/OpenGraph_Eng.jpg",
  // },
  alternates: {
    canonical: "/en/projects",
    languages: {
      uk: "/projects",
      en: "/en/projects",
    },
  },
};
const ukrMetadata: Metadata = {
  title: "Проєкти | Webrarium",
  // description:
  //   "Створення сайтів, розробка чат-ботів, автоматизація маркетингу, продуктовий дизайн, цифрова реклама",
  // openGraph: {
  //   images: "/OpenGraph_UA.jpg",
  // },
  alternates: {
    canonical: "/projects",
    languages: {
      uk: "/projects",
      en: "/en/projects",
    },
  },
};

export async function generateMetadata({ params }: any) {
  return params.locale === "en" ? englishMetadata : ukrMetadata;
}

// storyblokInit({
//   accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
//   use: [apiPlugin],
// });

export default async function Projects({ params: { locale } }: any) {
  const { data } = await fetchData(locale);

  return <StoryblokStory story={data.story} locale={locale} />;
}
async function fetchData(locale: string) {
  let sbParams: {
    version: "published" | "draft";
    language: any;
    resolve_relations: any;
  } = {
    version: "draft",
    language: locale,
    resolve_relations: ["projects_grid.projects_list"],
  };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/projects`, sbParams, {
    // cache: "no-store",
    next: {
      revalidate: 60,
    },
  });
}
