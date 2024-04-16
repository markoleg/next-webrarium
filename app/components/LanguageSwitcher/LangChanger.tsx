"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { i18nConfig } from "@/i18nConfig";
import styles from "@/app/components/LanguageSwitcher/LangChanger.module.css";
import { ChangeEvent, useState, useEffect } from "react";
import nookies from "nookies";

export default function LanguageChanger() {
  const [currentLocale, setCurrentLocale] = useState("");
  const router = useRouter();
  const currentPathname = usePathname();
  //get current locale from cookie NEXT_LOCALE
  useEffect(function () {
    nookies.get(null, "NEXT_LOCALE")?.NEXT_LOCALE
      ? setCurrentLocale(nookies.get(null, "NEXT_LOCALE")?.NEXT_LOCALE)
      : "uk";
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className={styles.lang_wrp}>
      {i18nConfig.locales.map((lang, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`language${index}`}
            name="language"
            value={lang}
            checked={currentLocale === lang}
            onChange={handleChange}
          />
          <label htmlFor={`language${index}`}>{i18nConfig.names[index]}</label>
        </div>
      ))}
    </div>
  );
}
