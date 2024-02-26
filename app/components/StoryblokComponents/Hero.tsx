import { storyblokEditable } from "@storyblok/react/rsc";
import styles from "./Hero.module.css";

export default function Hero({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="container">
        <h1 className={styles.hero_title}>{blok.title}</h1>
      </div>
    </section>
  );
}
