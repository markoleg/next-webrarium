import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import styles from "./Focus.module.css";

export default function FocusCard({ blok }: { blok: any }) {
  return (
    <div {...storyblokEditable(blok)} className={styles.focus_card}>
      <h3>{blok.title}</h3>
      <br />
      <div className={styles.divider}></div>
      <br />
      <div className={styles.description}>{render(blok.description)}</div>
    </div>
  );
}
