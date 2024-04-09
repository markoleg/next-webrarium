import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import styles from "./LatestProjects.module.css";

export default function LatestProjects({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="container">
        <h2>{blok.title}</h2>
        <div className={styles.latest_projects_wrp}>
          {blok.latest_projects.map((card: any) => (
            <StoryblokComponent blok={card} key={card._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
