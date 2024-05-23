import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

export default function Service({ blok }: { blok: any }) {
  return (
    <main {...storyblokEditable(blok)}>
      <section>
        <div className="container">
          <h1>{blok.title}</h1>
          {render(blok.description)}
        </div>
      </section>
    </main>
  );
}
