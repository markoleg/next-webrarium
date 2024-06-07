import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import styles from "./ServicePage.module.css";

export default function ServiceNeedCard({ blok }: { blok: any }) {
  return (
    <div {...storyblokEditable(blok)} className={styles.service_need_card}>
      <h3>{blok.title}</h3>
      <div className={styles.divider}></div>
      <div>{render(blok.description)}</div>
    </div>
  );
}
