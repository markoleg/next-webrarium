import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import styles from "@/app/components/StoryblokComponents/Focus/Focus.module.css";

export default function ServicesGrid({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="container">
        {blok.title ? <h2>{blok.title}</h2> : null}
        <div className={styles.focus_grid}>
          {blok.services_list.map((service: any) => (
            <ServiceCard blok={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ blok }: { blok: any }) {
  const serviceLink = `/${blok.full_slug}`;
  return (
    <Link href={serviceLink}>
      <div className={styles.focus_card}>
        <h3>{blok.content.title}</h3>
        <br />
        <div className={styles.divider}></div>
        <br />
        <div className={styles.description}>
          {render(blok.content.description)}
        </div>
      </div>
    </Link>
  );
}
