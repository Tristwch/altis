import { ChangeEvent, FC } from "react";
import Button from "../../shared/Button";

import styles from "./ContactUs.module.scss";
import Input from "../../shared/Input";

const ContactUs: FC = () => {
  return (
    <section className={styles.contactUs} id="contact-us">
      <h2 className={styles.title}>Замовити консультацію</h2>
      <form action="/submit" method="post" className={styles.form}>
        <Input label="Ім'я" placeholder="Павло" />
        <Input label={"Номер телефону"} placeholder="+380..." />
      </form>
      <Button text="Замовити" className={styles.submitButton} />
      <span className={styles.text}>
        Вам зателефонують протягом робочого дня
      </span>
    </section>
  );
};

export default ContactUs;
