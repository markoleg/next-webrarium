import { storyblokEditable, getStoryblokApi } from "@storyblok/react/rsc";
import styles from "@/app/components/StoryblokComponents/LatestProjects/LatestProjects.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectsGrid({ blok }: { blok: any }) {
  const [resolvedBlok, setResolvedBlok] = useState(blok);

  useEffect(() => {
    const fetchResolvedData = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories/${blok.slug}`, {
        version: "draft",
        resolve_relations: ["projects_grid.projects_list"],
      });

      setResolvedBlok(data.story.content);
    };

    if (!blok.projects_list) {
      fetchResolvedData();
    }
  }, [blok]);

  if (!resolvedBlok || !resolvedBlok.projects_list) {
    return <div>Loading...</div>;
  }
  return (
    <section {...storyblokEditable(resolvedBlok)}>
      <div className="container">
        {resolvedBlok.title ? <h2>{resolvedBlok.title}</h2> : null}
        <div className={styles.projects_wrp}>
          {resolvedBlok.projects_list.map((project: any) => (
            <ProjectCard
              blok={project}
              key={project.id}
              btntxt={resolvedBlok.button_txt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ blok, btntxt }: { blok: any; btntxt: string }) {
  const projectLink = `/${blok.full_slug}`;
  return (
    <div className={styles.project_card}>
      <img
        src={blok.content.cover.filename}
        alt={blok.content.cover.alt}
        className={styles.bg}
        loading="lazy"
      />
      <div className={styles.pc_content}>
        <h3>{blok.content.title}</h3>
        <div className={styles.divider}></div>
        <div className={styles.description}>{blok.content.description}</div>
        <Link href={projectLink} className={styles.case_btn}>
          {btntxt}
        </Link>
      </div>
    </div>
  );
}
