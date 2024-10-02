import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import type { Metadata } from "next";
// import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

const englishMetadata: Metadata = {
  metadataBase: new URL("https://webrarium.com"),
  title: "Webrarium | We create digital solutions",
  description:
    "Website development, chatbot development, marketing automation, product design, digital advertising.",
  openGraph: {
    images: "/OpenGraph_Eng.jpg",
  },
  alternates: {
    canonical: "/en",
    languages: {
      uk: "/",
      en: "/en",
    },
  },
};
const ukrMetadata: Metadata = {
  metadataBase: new URL("https://webrarium.com"),
  title: "Webrarium | Створюємо цифрові рішення",
  description:
    "Створення сайтів, розробка чат-ботів, автоматизація маркетингу, продуктовий дизайн, цифрова реклама",
  openGraph: {
    images: "/OpenGraph_UA.jpg",
  },
  alternates: {
    canonical: "/",
    languages: {
      uk: "/",
      en: "/en",
    },
  },
};

export async function generateMetadata({ params: { locale } }: HomeProps) {
  const rawSeoData = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/home?version=draft&token=${process.env.STORYBLOK_ACCESS_TOKEN}&language=${locale}`
  );
  const seoData = await rawSeoData.json();

  const Metadata: Metadata = {
    title:
      seoData.story.content.title ||
      (locale === "en"
        ? "Webrarium | We create digital solutions"
        : "Webrarium | Створюємо цифрові рішення"),
    description:
      seoData.story.content.description ||
      (locale === "en"
        ? "Website development, chatbot development, marketing automation, product design, digital advertising."
        : "Створення сайтів, розробка чат-ботів, автоматизація маркетингу, продуктовий дизайн, цифрова реклама"),
    openGraph: {
      images:
        seoData.story.content.og_image?.filename ||
        (locale === "en" ? "/OpenGraph_Eng.jpg" : "/OpenGraph_UA.jpg"),
    },
    alternates: {
      canonical: locale === "en" ? "/en" : "/",
      languages: {
        uk: "/",
        en: "/en",
      },
    },
  };
  return Metadata;
}

interface HomeProps {
  params: {
    locale: string;
  };
}

export default async function Home({ params: { locale } }: HomeProps) {
  try {
    const { data } = await fetchData(locale);
    return <StoryblokStory story={data.story} />;
  } catch {
    return notFound(); // Повертає сторінку 404;
  }
}
async function fetchData(locale: string) {
  let sbParams: {
    version: "published" | "draft";
    language: any;
    resolve_relations: any;
  } = {
    version: "draft",
    language: locale,
    resolve_relations: [
      "projects_grid.projects_list,services_grid.services_list",
    ],
  };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, {
    cache: "no-store",
  });
}
