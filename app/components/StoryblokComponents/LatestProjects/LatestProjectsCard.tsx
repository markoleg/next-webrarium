import { storyblokEditable } from "@storyblok/react/rsc";
import styles from "./LatestProjects.module.css";
import nookies from "nookies";
import Link from "next/link";

export default function ProjectCard({ blok }: { blok: any }) {
  const curloc = nookies.get(null, "NEXT_LOCALE")?.NEXT_LOCALE;
  return (
    <div
      {...storyblokEditable(blok)}
      className={styles.project_card}
      style={{
        backgroundImage: `url(${blok.cover.filename})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center center",
      }}
    >
      <div className={styles.pc_content}>
        <h3>{blok.title}</h3>
        <div className={styles.divider}></div>
        <div className={styles.description}>{blok.description}</div>
        <Link href={blok.link.url} className={styles.case_btn}>
          {curloc === "en" ? "show full case" : "подивитися кейс"}
        </Link>
      </div>
    </div>
  );
}
