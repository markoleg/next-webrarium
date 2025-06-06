import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { notFound } from "next/navigation";
import GlobalContacts from "@/app/components/GlobalContacts";
import { Metadata } from "next";

export const revalidate = 600;

export async function generateMetadata({ params }: any) {
  const locale = params.locale || "uk";
  const serviceData = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/services/${params.slug}/?version=draft&token=${process.env.STORYBLOK_ACCESS_TOKEN}&language=${locale}`,
    { next: { revalidate: 600 } }
  );
  if (serviceData.status === 404) {
    return {};
  }
  const service = await serviceData.json();

  const metadata: Metadata = {
    title: service.story.content.title + " | Webrarium",
    description: service.story.content.subtitle,
    openGraph: {
      images: locale === "en" ? "/OpenGraph_Eng.jpg" : "/OpenGraph_UA.jpg",
    },
    alternates: {
      canonical: `/${service.story.full_slug}`,
      languages: {
        uk: `/${service.story.full_slug}`,
        en: `/en/${service.story.full_slug}`,
      },
    },
  };
  return metadata;
}

export async function generateStaticParams() {
  const services = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/services/?version=draft&token=${process.env.STORYBLOK_ACCESS_TOKEN}&resolve_relations=services_grid.services_list`,
    { next: { revalidate: 600 } }
  ).then((res) => res.json());

  const slugsUk = services.rels.map((service: any) => ({
    slug: service.slug,
    locale: "uk",
  }));
  const slugsEn = services.rels.map((service: any) => ({
    slug: service.slug,
    locale: "en",
  }));
  const statitParams = [...slugsUk, ...slugsEn];
  return statitParams;
}

export default async function ServicePage({ params: { locale, slug } }: any) {
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
  return storyblokApi.get(`cdn/stories/services/${slug}`, sbParams, {
    next: {
      revalidate: 600,
    },
  });
}
