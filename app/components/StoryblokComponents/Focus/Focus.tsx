import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import styles from "./Focus.module.css";

export default function Focus({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="container">
        <h2>{blok.title}</h2>
        <div className={styles.focus_grid}>
          {blok.focus_cards.map((focus: any) => (
            <StoryblokComponent blok={focus} key={focus._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
