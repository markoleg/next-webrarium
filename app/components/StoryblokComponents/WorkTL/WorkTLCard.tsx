import { storyblokEditable } from "@storyblok/react/rsc";

import styles from "./WorkTL.module.css";
export default function WorkTLCard({ blok }: { blok: any }) {
  return (
    <div
      className={styles.work_tl_card + " " + "tl"}
      {...storyblokEditable(blok)}
    >
      <div className={styles.front}>
        <div>{blok.title}</div>
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
        <svg
          className={styles.line_end}
          width="247"
          height="17"
          viewBox="0 0 247 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M230.565 8.5C230.565 12.9183 234.147 16.5 238.565 16.5C242.984 16.5 246.565 12.9183 246.565 8.5C246.565 4.08172 242.984 0.5 238.565 0.5C234.147 0.5 230.565 4.08172 230.565 8.5ZM0.0117188 10H238.565V7H0.0117188V10Z"
            fill="none"
          />
        </svg>
      </div>
      <div className={styles.back}>{blok.description}</div>
    </div>
  );
}
