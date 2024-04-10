import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import styles from "./Testimonials.module.css";

export default function Testimonials({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="container">
        <div className={styles.testimonials_wrp}>
          <div className={styles.testimonial_card}>
            <h2 className={styles.card_title}>{blok.title}</h2>
          </div>
          {blok.testimonials.map((card: any) => (
            <StoryblokComponent blok={card} key={card._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
