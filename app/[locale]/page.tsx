import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import type { Metadata } from "next";

const englishMetadata: Metadata = {
  title: "Webrarium | We create digital solutions that help your business grow",
  description:
    "Website development, chatbot development, marketing automation, product design, digital advertising.",
};
const ukrMetadata: Metadata = {
  title:
    "Webrarium | Створюємо цифрові рішення, що допомагають вашому бізнесу зростати",
  description:
    "Створення сайтів, розробка чат-ботів, автоматизація маркетингу, продуктовий дизайн, цифрова реклама",
};

export async function generateMetadata({ params }: any) {
  return params.locale === "en" ? englishMetadata : ukrMetadata;
}
export default async function Home({ params: { locale } }: any) {
  const { data } = await fetchData(locale);

  return <StoryblokStory story={data.story} />;
}
async function fetchData(locale: string) {
  let sbParams: {
    version: "published" | "draft";
    language: any;
  } = { version: "draft", language: locale };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, { cache: "no-store" });
}
