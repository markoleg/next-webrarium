import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import type { Metadata } from "next";

export default async function ProjectPage({ params: { locale, slug } }: any) {
  const { data } = await fetchData(locale, slug);

  return <StoryblokStory story={data.story} />;
}
async function fetchData(locale: string, slug: string) {
  let sbParams: {
    version: "published" | "draft";
    language: any;
  } = {
    version: "draft",
    language: locale,
  };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/projects/${slug}`, sbParams, {
    cache: "no-store",
  });
}
