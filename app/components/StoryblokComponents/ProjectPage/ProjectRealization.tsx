import { storyblokEditable } from "@storyblok/react/rsc";
import styles from "./ProjectPage.module.css";
import { render } from "storyblok-rich-text-react-renderer";

export default function ProjectRealization({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="container">
        <h2>{blok.title}</h2>
        <div className={styles.realization_txt}>{render(blok.text)}</div>
      </div>
    </section>
  );
}
