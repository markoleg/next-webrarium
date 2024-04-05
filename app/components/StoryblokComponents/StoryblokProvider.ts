"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "./Page";
import HeaderS from "./HeaderS";
import NavLink from "./NavLink";
import Hero from "./Hero";
import WorkTL from "./WorkTL";
import WorkTLCard from "./WorkTLCard";
import Stack from "./Stack";

const components = {
  page: Page,
  hero: Hero,
  header: HeaderS,
  nav_link: NavLink,
  work_tl: WorkTL,
  work_tl_card: WorkTLCard,
  stack: Stack,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }: any) {
  return children;
}
