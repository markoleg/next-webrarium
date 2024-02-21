import Image from "next/image";
import styles from "./page.module.css";
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export default async function Home({ params: { locale } }: any) {
  const { data } = await fetchData(locale);

  return <StoryblokStory story={data.story} />;
}
export async function fetchData(locale: string) {
  let sbParams: {
    version: "published" | "draft";
    language: any;
  } = { version: "draft", language: locale };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, { cache: "no-store" });
}
