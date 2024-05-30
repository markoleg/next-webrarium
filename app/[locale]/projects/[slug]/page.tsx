import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import type { Metadata } from "next";

// export async function generateStaticParams() {
//   const projects = await fetch(
//     `https://api.storyblok.com/v2/cdn/stories/projects/?version=draft&token=${process.env.STORYBLOK_ACCESS_TOKEN}&cv=1716916202&resolve_relations=projects_grid.projects_list`
//   ).then((res) => res.json());

//   return projects.rels.map((project: any) => ({
//     slug: project.slug,
//   }));
// }

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

export default async function ProjectPage({ params: { locale, slug } }: any) {
  const { data } = await fetchData(locale, slug);

  return <StoryblokStory story={data.story} />;
}
