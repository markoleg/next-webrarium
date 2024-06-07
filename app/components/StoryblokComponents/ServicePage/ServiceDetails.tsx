import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import styles from "./ServicePage.module.css";

export default function ServiceDetails({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} id="services">
      <div className="container">
        <h2>{blok.title}</h2>
        <div className={styles.service_details_grid}>
          {blok.service_details_cards.map((card: any, index: number) => (
            <StoryblokComponent blok={card} key={card._uid} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
