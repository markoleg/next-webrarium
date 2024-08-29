import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import type { Metadata } from "next";

const englishMetadata: Metadata = {
  // metadataBase: new URL("https://webrarium.com"),
  title: "Services | Webrarium",
  // description:
  //   "Website development, chatbot development, marketing automation, product design, digital advertising.",
  // openGraph: {
  //   images: "/OpenGraph_Eng.jpg",
  // },
  alternates: {
    canonical: "/en/services",
    languages: {
      uk: "/services",
      en: "/en/services",
    },
  },
};
const ukrMetadata: Metadata = {
  // metadataBase: new URL("https://webrarium.com"),
  title: "Послуги | Webrarium",
  // description:
  //   "Створення сайтів, розробка чат-ботів, автоматизація маркетингу, продуктовий дизайн, цифрова реклама",
  // openGraph: {
  //   images: "/OpenGraph_UA.jpg",
  // },
  alternates: {
    canonical: "/services",
    languages: {
      uk: "/services",
      en: "/en/services",
    },
  },
};

export async function generateMetadata({ params }: any) {
  return params.locale === "en" ? englishMetadata : ukrMetadata;
}
// export async function generateStaticParams() {
//   const statitParams = [{ locale: "en" }, { locale: "uk" }];
//   return statitParams;
// }

export default async function Services({ params: { locale } }: any) {
  const { data } = await fetchData(locale);

  return <StoryblokStory story={data.story} />;
}
async function fetchData(locale: string) {
  let sbParams: {
    version: "published" | "draft";
    language: any;
    resolve_relations: any;
  } = {
    version: "draft",
    language: locale,
    resolve_relations: ["services_grid.services_list"],
  };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/services`, sbParams, {
    cache: "no-store",
  });
}
