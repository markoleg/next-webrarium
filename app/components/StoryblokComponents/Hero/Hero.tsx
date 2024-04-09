import { storyblokEditable } from "@storyblok/react/rsc";
import styles from "./Hero.module.css";
import Splinet from "@/app/components/spline";

export default function Hero({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className={styles.hero_section}>
      <div className="container">
        <div className={styles.hero_wrp}>
          <h1>
            <span className={styles.hero_title}>{blok.title}</span>
            <br />
            <span className={styles.subtitle}>{blok.subtitle}</span>
          </h1>
          <div className="divider"></div>
        </div>
      </div>
      <Splinet />
    </section>
  );
}
