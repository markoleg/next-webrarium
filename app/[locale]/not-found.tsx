import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="container">
        <h2>Not Found</h2>
        <Link href="/">Return Home</Link>
      </div>
    </section>
  );
}
