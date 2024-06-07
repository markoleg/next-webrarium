import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import styles from "./ServicePage.module.css";
import Image from "next/image";

export default function ServiceNeed({ blok }: { blok: any }) {
  let pattern = /^\/\//;
  return (
    <section {...storyblokEditable(blok)} id="services">
      <div className="container">
        <h2>{blok.title}</h2>
        <div className={styles.service_need_wrp}>
          {!pattern.test(blok.media) ? (
            <video autoPlay muted loop playsInline>
              <source src={blok.media}></source>
            </video>
          ) : (
            <div>
              <Image
                src={blok.media}
                width={1000}
                height={1000}
                alt="why do you need our service"
              />
            </div>
          )}
          <div className={styles.service_need_cards_wrp}>
            {blok.cards.map((card: any, index: number) => (
              <StoryblokComponent blok={card} key={card._uid} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
