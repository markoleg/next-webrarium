import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import type { Metadata } from "next";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

const englishMetadata: Metadata = {
  metadataBase: new URL("https://webrarium.com"),
  title: "Webrarium | Privacy Policy",
  description: "Privacy Policy",
  openGraph: {
    images: "/Webrarium_Cover-open-graph.webp",
  },
  alternates: {
    canonical: "/en/privacy-policy",
    languages: {
      uk: "/privacy-policy",
      en: "/en/privacy-policy",
    },
  },
};
const ukrMetadata: Metadata = {
  metadataBase: new URL("https://webrarium.com"),
  title: "Webrarium | Політика конфіденційності",
  description: "Політика конфіденційності",
  openGraph: {
    images: "/Webrarium_Cover-open-graph_UA.webp",
  },
  alternates: {
    canonical: "/privacy-policy",
    languages: {
      uk: "/privacy-policy",
      en: "/en/privacy-policy",
    },
  },
};
export async function generateStaticParams() {
  const statitParams = [{ locale: "en" }, { locale: "uk" }];
  return statitParams;
}
storyblokInit({
  // accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});
export async function generateMetadata({ params }: any) {
  return params.locale === "en" ? englishMetadata : ukrMetadata;
}

export default async function PrivacyPolicyPage({ params: { locale } }: any) {
  const { data } = await fetchData(locale);

  return <StoryblokStory story={data.story} />;
}

async function fetchData(locale: string) {
  let sbParams: {
    version: "published" | "draft";
    language: any;
  } = { version: "draft", language: locale };

  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/privacy-policy`, sbParams, {
    cache: "no-store",
  });
}
