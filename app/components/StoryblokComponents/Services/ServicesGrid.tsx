import { storyblokEditable, getStoryblokApi } from "@storyblok/react/rsc";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import styles from "@/app/components/StoryblokComponents/Focus/Focus.module.css";
import { useEffect, useState } from "react";

export default function ServicesGrid({ blok }: { blok: any }) {
  const [resolvedBlok, setResolvedBlok] = useState(blok);

  useEffect(() => {
    const fetchResolvedData = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories/${blok.slug}`, {
        version: "draft",
        resolve_relations: ["services_grid.services_list"],
      });

      setResolvedBlok(data.story.content);
    };

    if (!blok.services_list) {
      fetchResolvedData();
    }
  }, [blok]);

  if (!resolvedBlok || !resolvedBlok.services_list) {
    return <div>Loading...</div>;
  }
  return (
    <section {...storyblokEditable(resolvedBlok)}>
      <div className="container">
        {resolvedBlok.title ? <h2>{resolvedBlok.title}</h2> : null}
        <div className={styles.focus_grid}>
          {resolvedBlok.services_list.map((service: any) => (
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
