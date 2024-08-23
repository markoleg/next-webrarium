import GlobalContacts from "@/app/components/GlobalContacts";
import {
  apiPlugin,
  getStoryblokApi,
  storyblokInit,
} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: any) {
  const locale = params.locale || "uk";
  const projectData = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/projects/${params.slug}/?version=draft&token=${process.env.STORYBLOK_ACCESS_TOKEN}&language=${locale}`
  );
  if (projectData.status === 404) {
    return {};
  }
  const project = await projectData.json();
  const metadata: Metadata = {
    title: project.story.content.title + " | webrarium",
    description: project.story.content.subtitle,
    openGraph: {
      images: locale === "en" ? "/OpenGraph_Eng.jpg" : "/OpenGraph_UA.jpg",
    },
    alternates: {
      canonical: `/${project.story.full_slug}`,
      languages: {
        uk: `/${project.story.full_slug}`,
        en: `/en/${project.story.full_slug}`,
      },
    },
  };
  return metadata;
}

export async function generateStaticParams() {
  const projects = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/projects/?version=draft&token=${process.env.STORYBLOK_ACCESS_TOKEN}&resolve_relations=projects_grid.projects_list`
  ).then((res) => res.json());

  const slugsUk = projects.rels.map((project: any) => ({
    slug: project.slug,
    locale: "uk",
  }));
  const slugsEn = projects.rels.map((project: any) => ({
    slug: project.slug,
    locale: "en",
  }));
  const statitParams = [...slugsUk, ...slugsEn];
  return statitParams;
}

storyblokInit({
  // accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

async function fetchData(locale: string, slug: string) {
  let sbParams: {
    version: "published" | "draft";
    language: any;
    resolve_relations: any;
  } = {
    version: "draft",
    language: locale,
    resolve_relations: [
      "services_grid.services_list,projects_grid.projects_list",
    ],
  };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/projects/${slug}`, sbParams, {
    cache: "no-store",
  });
}

export default async function ProjectPage({ params: { locale, slug } }: any) {
  try {
    const { data } = await fetchData(locale, slug);
    return (
      <>
        <StoryblokStory story={data.story} />
        <GlobalContacts locale={locale} />
      </>
    );
  } catch {
    // return 404 error
    return notFound();
  }
}
