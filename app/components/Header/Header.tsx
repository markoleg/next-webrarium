import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { i18nConfig } from "@/i18nConfig";

async function getData(locale) {
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/header?version=draft&token=${process.env.STORYBLOK_ACCESS_TOKEN}&cv=1708530770&language=${locale}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Header({ locale }) {
  const data = await getData(locale);
  const locales = i18nConfig.names;
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_wrp}>
          <Link href="/">
            <Image
              src={data.story.content.logo.filename}
              width={150}
              height={17}
              alt="webrarium logo"
            />
          </Link>
          <div className={styles.lang}>
            {i18nConfig.locales.map((lang, index) => (
              <Link href={lang} key={lang}>
                {locales[index]}
              </Link>
            ))}
          </div>
          <nav className={styles.nav}>
            {data.story.content.nav.map((navlink) => (
              <Link href={navlink.nav_link.url} key={navlink._uid}>
                {navlink.nav_text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
