import { storyblokEditable } from "@storyblok/react/rsc";
import styles from "./Hero.module.css";

export default function Hero({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="container">
        <h1 style={{ color: blok.title_color }}>{blok.title}</h1>
      </div>
    </section>
  );
}
