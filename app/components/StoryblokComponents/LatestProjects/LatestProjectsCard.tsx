import { storyblokEditable } from "@storyblok/react/rsc";
import styles from "./LatestProjects.module.css";
import Link from "next/link";

export default function ProjectCard({
  blok,
  btntxt,
}: {
  blok: any;
  btntxt: string;
}) {
  return (
    <div {...storyblokEditable(blok)} className={styles.project_card}>
      <img
        src={blok.cover.filename}
        alt={blok.cover.alt}
        className={styles.bg}
      />
      <div className={styles.pc_content}>
        <h3>{blok.title}</h3>
        <div className={styles.divider}></div>
        <div className={styles.description}>{blok.description}</div>
        <Link href={blok.link.url} className={styles.case_btn} target="_blank">
          {btntxt}
        </Link>
      </div>
    </div>
  );
}
