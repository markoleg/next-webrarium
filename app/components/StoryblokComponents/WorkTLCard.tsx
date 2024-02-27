import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

import styles from "./WorkTL.module.css";
export default function WorkTLCard({ blok }: { blok: any }) {
  return (
    <div className={styles.work_tl_card} {...storyblokEditable(blok)}>
      <div className={styles.front}>{blok.title}</div>
      <div className={styles.back}>{blok.description}</div>
      <svg
        className={styles.line}
        width="241"
        height="23"
        viewBox="0 0 241 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M240.343 12.5607C240.929 11.9749 240.929 11.0251 240.343 10.4393L230.797 0.893398C230.211 0.307611 229.261 0.307611 228.675 0.893398C228.09 1.47919 228.09 2.42893 228.675 3.01472L237.161 11.5L228.675 19.9853C228.09 20.5711 228.09 21.5208 228.675 22.1066C229.261 22.6924 230.211 22.6924 230.797 22.1066L240.343 12.5607ZM0.728516 13H239.282V10H0.728516V13Z"
          fill="none"
        />
      </svg>
      {/* {render(blok.svg_arrow)} */}
    </div>
  );
}
