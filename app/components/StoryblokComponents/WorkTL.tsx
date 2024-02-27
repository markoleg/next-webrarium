import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import styles from "./WorkTL.module.css";

export default function WorkTL({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className={styles.work_tl_section}>
      <div className="container">
        <div className={styles.worktl_cards_wrp}>
          {blok.work_tl_cards.map((work_card: any) => (
            <StoryblokComponent blok={work_card} key={work_card._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
