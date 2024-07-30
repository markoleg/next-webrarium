import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import styles from "./ServicePage.module.css";
import Image from "next/image";

export default function ServiceInstruments({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="container">
        <h2>{blok.title}</h2>
        <div className={styles.service_instruments_cards_wrp}>
          {blok.cards.map((card: any, index: number) => (
            <StoryblokComponent blok={card} key={card._uid} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
