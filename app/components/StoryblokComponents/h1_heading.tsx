import { storyblokEditable } from "@storyblok/react/rsc";

export default function h1Heading({ blok }: { blok: any }) {
  return (
    <section style={{ paddingBottom: 0 }}>
      <div className="container">
        <h1 {...storyblokEditable(blok)}>{blok.title}</h1>
      </div>
    </section>
  );
}
