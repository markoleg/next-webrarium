import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

export default function NavLink({ blok }: { blok: any }) {
  return (
    <Link href={blok.nav_link.url} {...storyblokEditable(blok)}>
      {blok.nav_text}
    </Link>
  );
}
