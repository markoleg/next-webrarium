"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "./Page";
import Hero from "./Hero";
import HeaderS from "./HeaderS";
import NavLink from "./NavLink";
import WorkTL from "./WorkTL";
import WorkTLCard from "./WorkTLCard";

const components = {
  page: Page,
  hero: Hero,
  header: HeaderS,
  nav_link: NavLink,
  work_tl: WorkTL,
  work_tl_card: WorkTLCard,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }: any) {
  return children;
}
