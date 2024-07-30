import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import styles from "./ServicePage.module.css";

export default function ServiceInstrumentsCard({ blok }: { blok: any }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className={styles.service_instruments_card}
    >
      <div>
        <h3>{blok.title}</h3>
        <div className={styles.instruments_list}>
          {render(blok.instruments_list)}
        </div>
      </div>
      <div className={styles.instruments_logos}>
        {blok.instruments_logos.map((logo: any) => (
          <div className={styles.instruments_logo_wrp} key={logo.filename}>
            <img src={logo.filename} alt={logo.alt} height={55} />
          </div>
        ))}
      </div>
    </div>
  );
}
