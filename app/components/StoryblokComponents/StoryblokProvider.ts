"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "./Page";
import Hero from "./Hero";

const components = {
  page: Page,
  hero: Hero,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }: any) {
  return children;
}
