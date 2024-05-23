import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

export default function Service({ blok }: { blok: any }) {
  return (
    <main {...storyblokEditable(blok)}>
      <section>
        <div className="container">
          <h1>{blok.title}</h1>
          <p>{blok.description}</p>
        </div>
      </section>
    </main>
  );
}
