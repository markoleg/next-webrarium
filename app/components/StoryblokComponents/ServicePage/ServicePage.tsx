import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import style from "@/app/components/StoryblokComponents/ServicePage/ServicePage.module.css";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ServicePage({ blok }: { blok: any }) {
  // get locale
  const { locale } = useParams();
  return (
    <main {...storyblokEditable(blok)}>
      <section className={style.hero_section}>
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/services" className="bc_link">
              {locale === "en" ? "services" : "послуги"}
            </Link>
            <span> / </span>
            <span className="bc_current">{blok.title}</span>
          </div>
          <div className={style.hero_wrp}>
            <h1>{blok.title}</h1>
            <div>{blok.subtitle}</div>
            <div className="divider"></div>
          </div>
        </div>
      </section>
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
