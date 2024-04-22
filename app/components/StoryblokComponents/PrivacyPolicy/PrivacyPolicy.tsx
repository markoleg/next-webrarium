import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import styles from "./PrivacyPolicy.module.css";

export default function PrivacyPolicy({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className={styles.privacy_policy}>
      <div className="container">
        <h1>{blok.title}</h1>
        <br />
        <div className={styles.content}>{render(blok.content)}</div>
      </div>
    </section>
  );
}
