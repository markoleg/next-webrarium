import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import style from "@/app/components/StoryblokComponents/ServicePage/ServicePage.module.css";

export default async function ServicePage({ blok }: { blok: any }) {
  return (
    <main {...storyblokEditable(blok)}>
      <section className={style.hero_section}>
        <div className="container">
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
