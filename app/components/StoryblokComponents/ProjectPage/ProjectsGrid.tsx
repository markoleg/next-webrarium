import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import styles from "@/app/components/StoryblokComponents/LatestProjects/LatestProjects.module.css";
import Link from "next/link";

export default function ProjectsGrid({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="container">
        {blok.title ? <h2>{blok.title}</h2> : null}
        <div className={styles.projects_wrp}>
          {blok.projects_list.map((project: any) => (
            <ProjectCard
              blok={project}
              key={project.id}
              btntxt={blok.button_txt}
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
