import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import styles from "./LatestProjects.module.css";

export default function LatestProjects({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} id="projects">
      <div className="container">
        <h2>{blok.title}</h2>
        <div className={styles.projects_wrp}>
          {blok.latest_projects.map((card: any) => (
            <StoryblokComponent
              blok={card}
              key={card._uid}
              btntxt={blok.btn_txt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
