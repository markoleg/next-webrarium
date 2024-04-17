import { storyblokEditable } from "@storyblok/react/rsc";
import styles from "./Partners.module.css";

export default function PartnerLogo({ blok }: { blok: any }) {
  return (
    <div {...storyblokEditable(blok)} className={styles.partner_logo_card}>
      <img
        src={blok.logo_img.filename}
        alt={blok.logo_img.alt}
        className={styles.partner_logo}
        loading="lazy"
      />
      <span>{blok.icon}</span>
    </div>
  );
}
