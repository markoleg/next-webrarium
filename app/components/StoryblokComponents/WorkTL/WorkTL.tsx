import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import styles from "./WorkTL.module.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function WorkTL({ blok }: { blok: any }) {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        ".tl",
        { x: -3000 },
        {
          x: 0,
          stagger: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current!,
            start: "top 80%",
            end: "center 78%",
            scrub: true,
            markers: false,
          },
        }
      );
    },
    { scope: sectionRef }
  );
  return (
    <section
      {...storyblokEditable(blok)}
      className={styles.work_tl_section}
      ref={sectionRef}
      id="getstarted"
    >
      <div className="container">
        <div className={styles.worktl_cards_wrp}>
          {blok.work_tl_cards.map((work_card: any) => (
            <StoryblokComponent blok={work_card} key={work_card._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
