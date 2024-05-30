import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LPT from "@/app/components/lottietest";
export async function generateStaticParams() {
  const services = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/services/?version=draft&token=${process.env.STORYBLOK_ACCESS_TOKEN}&cv=1716916202&resolve_relations=services_grid.services_list`
  ).then((res) => res.json());

  return services.rels.map((service: any) => ({
    slug: service.slug,
  }));
}
export default async function ServicePage({ params: { locale, slug } }: any) {
  try {
    const { data } = await fetchData(locale, slug);
    // return <StoryblokStory story={data.story} />;
    return (
      <>
        <StoryblokStory story={data.story} />
        <LPT />
        <div className="container" style={{ border: "3px solid red" }}>
          <video autoPlay loop muted width={50} playsInline>
            <source src="/2.mp4" />
          </video>
        </div>
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
  } = {
    version: "draft",
    language: locale,
  };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/services/${slug}`, sbParams, {
    cache: "no-store",
  });
}
