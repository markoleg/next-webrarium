// "use client";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import styles from "./ServiceDetails.module.css";
import LP from "@/app/components/LottiePlayer";

export default function ServiceDetailsCard({
  blok,
  index,
}: {
  blok: any;
  index: number;
}) {
  return (
    <div {...storyblokEditable(blok)} className={styles.service_details_card}>
      <LP index={index} />
      <h3>{blok.title}</h3>

      <div className={styles.description}>{render(blok.description)}</div>
    </div>
  );
}
