import { storyblokEditable } from "@storyblok/react/rsc";
import styles from "./ProjectPage.module.css";
import { render } from "storyblok-rich-text-react-renderer";

export default function ProjectHeadline({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="container">
        <h2>{blok.headline}</h2>
        {render(blok.text)}
      </div>
    </section>
  );
}
