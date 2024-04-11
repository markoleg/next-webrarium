"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/utils/send-email";
import { storyblokEditable } from "@storyblok/react/rsc";
import styles from "./Contact.module.css";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = ({ blok }: { blok: any }) => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <section>
      <div className="container">
        <h2>{blok.title}</h2>
        <form onSubmit={handleSubmit(onSubmit)} {...storyblokEditable(blok)}>
          <div className={styles.field}>
            <label htmlFor="name">{blok.name_label}</label>
            <input type="text" {...register("name", { required: true })} />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">{blok.email_label}</label>
            <input type="email" {...register("email", { required: true })} />
          </div>
          <div className={styles.field}>
            <label htmlFor="message">{blok.message_label}</label>
            <textarea
              rows={4}
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <div>
            <button>{blok.button_txt}</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
