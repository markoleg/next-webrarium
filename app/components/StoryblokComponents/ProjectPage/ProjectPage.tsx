import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

export default function ProjectPage({ blok }: { blok: any }) {
  return (
    <main {...storyblokEditable(blok)}>
      <section
        style={{
          backgroundImage: `url(${blok.cover.filename})`,
          mixBlendMode: "hard-light",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h1>{blok.title}</h1>
          <p>{blok.description}</p>
        </div>
      </section>
    </main>
  );
}
