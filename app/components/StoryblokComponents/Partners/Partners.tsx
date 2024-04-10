import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import styles from "./Partners.module.css";

export default function Partners({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="container">
        <h2>{blok.title}</h2>
        <div className={styles.partners_logos_wrp}>
          {blok.partners_logos.map((card: any) => (
            <StoryblokComponent blok={card} key={card._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
