import { storyblokEditable } from "@storyblok/react/rsc";
import styles from "./ProjectPage.module.css";

export default function ProjectResultsCard({ blok }: { blok: any }) {
  return (
    <div {...storyblokEditable(blok)} className={styles.projects_results_card}>
      <h3>{blok.title}</h3>
      <p className={styles.results_txt}>{blok.text}</p>
    </div>
  );
}
