import { storyblokEditable } from "@storyblok/react/rsc";
import styles from "./ProjectPage.module.css";
import { render } from "storyblok-rich-text-react-renderer";

export default function ProjectChallengeInstruments({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="container">
        <div className={styles.challenge_instruments_wrp}>
          <div className={styles.c_i_item}>
            <h3>{blok.challenge_title}</h3>
            {render(blok.challenge_txt)}
          </div>
          <div className={styles.c_i_item}>
            <h3>{blok.instruments_title}</h3>
            {render(blok.instruments_txt)}
          </div>
        </div>
      </div>
    </section>
  );
}
