import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import styles from "./Focus.module.css";

export default function Focus({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} id="services">
      <div className="container">
        <h2>{blok.title}</h2>
        <div className={styles.focus_grid}>
          {blok.focus_cards.map((focus: any, index: number) => (
            <StoryblokComponent blok={focus} key={focus._uid} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
