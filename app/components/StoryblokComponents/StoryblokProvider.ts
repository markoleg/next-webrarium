"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "./Page";
import Hero from "./Hero";
import HeaderS from "./HeaderS";
import NavLink from "./NavLink";

const components = {
  page: Page,
  hero: Hero,
  header: HeaderS,
  nav_link: NavLink,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }: any) {
  return children;
}
