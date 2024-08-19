import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import GlobalContacts from "@/app/components/GlobalContacts";

// export async function generateStaticParams() {
//   const services = await fetch(
//     `https://api.storyblok.com/v2/cdn/stories/services/?version=draft&token=${process.env.STORYBLOK_ACCESS_TOKEN}&cv=1716916202&resolve_relations=services_grid.services_list`
//   ).then((res) => res.json());

//   return services.rels.map((service: any) => ({
//     slug: service.slug,
//   }));
// }
storyblokInit({
  // accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});
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
    cache: "no-store",
  });
}
