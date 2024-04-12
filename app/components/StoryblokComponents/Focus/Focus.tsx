import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import styles from "./Focus.module.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Focus({ blok }: { blok: any }) {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const boxes = gsap.utils.toArray(".box");
      boxes.forEach((box: any) => {
        gsap.fromTo(
          box,
          { x: 1000 },
          {
            x: 0,
            scrollTrigger: {
              trigger: box,
              start: "top 80%",
              end: "center 85%",
              scrub: true,
              markers: false,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );
  return (
    <section {...storyblokEditable(blok)} ref={sectionRef}>
      <div className="container">
        <h2>{blok.title}</h2>
        <div className={styles.focus_grid}>
          {blok.focus_cards.map((focus: any, index: number) => (
            <StoryblokComponent blok={focus} key={focus._uid} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
