import GlobalContacts from "@/app/components/GlobalContacts";
import {
  // apiPlugin,
  getStoryblokApi,
  // storyblokInit,
} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// storyblokInit({
//   accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
//   use: [apiPlugin],
// });

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
    title: project.story.content.title + " | Webrarium",
    description: project.story.content.subtitle,
    openGraph: {
      images: project.story.content.cover.filename,
    },
    // openGraph: {
    //   images: locale === "en" ? "/OpenGraph_Eng.jpg" : "/OpenGraph_UA.jpg",
    // },
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

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

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
  const staticParams = [...slugsUk, ...slugsEn];

  return staticParams;
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
  } catch (e) {
    // return 404 error
    console.error(e);
    return notFound();
  }
}

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
    // cache: "no-store",
    next: {
      revalidate: 60,
    },
  });
}
