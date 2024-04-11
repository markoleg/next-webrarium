"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "./Page";
import HeaderS from "./HeaderS";
import NavLink from "./NavLink";
import Hero from "./Hero/Hero";
import WorkTL from "./WorkTL/WorkTL";
import WorkTLCard from "./WorkTL/WorkTLCard";
import Stack from "./Stack/Stack";
import Focus from "./Focus/Focus";
import FocusCard from "./Focus/FocusCard";
import LatestProjects from "./LatestProjects/LatestProjects";
import ProjectCard from "./LatestProjects/LatestProjectsCard";
import Cta from "./Cta/Cta";
import Partners from "./Partners/Partners";
import PartnerLogo from "./Partners/PartnerLogo";
import Testimonials from "./Testimonials/Testimonials";
import TestimonialCard from "./Testimonials/TestimonialCard";
import Contact from "./Contact/Contact";

const components = {
  page: Page,
  hero: Hero,
  header: HeaderS,
  nav_link: NavLink,
  work_tl: WorkTL,
  work_tl_card: WorkTLCard,
  stack: Stack,
  focus: Focus,
  focus_card: FocusCard,
  latest_projects: LatestProjects,
  project_card: ProjectCard,
  cta: Cta,
  partners: Partners,
  partner_logo: PartnerLogo,
  testimonials: Testimonials,
  testimonial_card: TestimonialCard,
  contact: Contact,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }: any) {
  return children;
}
