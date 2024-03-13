"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { i18nConfig } from "@/i18nConfig";
import styles from "@/app/components/LanguageSwitcher/LangChanger.module.css";

export default function LanguageChanger() {
  //get current locale from cookie NEXT_LOCALE
  const currentLocale = getCookie("NEXT_LOCALE");
  const router = useRouter();
  const currentPathname = usePathname();
  function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
  }
  const handleChange = (e) => {
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

  //   return (
  //     <select onChange={handleChange} value={currentLocale}>
  //       {i18nConfig.locales.map((lang, index) => (
  //         <option value={lang}>{i18nConfig.names[index]}</option>
  //       ))}
  //     </select>
  //   );
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
