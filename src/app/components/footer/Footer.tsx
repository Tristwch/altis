import { FC } from "react";

import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["logo-wrapper"]}>
        <img className={styles["logo"]} src="/icons/logo.svg" alt="logo" />
      </div>
      <ul className={styles["footer-list"]}>
        <li className={styles["footer-list-item"]}>
          <span>Часи роботи:</span>
          <span>Пн-пт</span>
          <span>9:00 - 17:30</span>
          <span>м.Олександрія</span>
        </li>
        <li className={styles["footer-list-item"]}>
          <Link href="/faqs">FAQs</Link>
          <Link href="/faqs">Кар’єра</Link>
        </li>
        <li className={styles["footer-list-item"]}>
          <div className="flex">
            <img className={styles["icon"]} src="/icons/phone.svg" alt="logo" />
            <span className="leading-[20px]">+38(068) 459 13 11</span>
          </div>
          <div className="flex">
            <img className={styles["icon"]} src="/icons/email.svg" alt="logo" />
            <span className="leading-[20px]">altis362@gmail.com</span>
          </div>
          <div className="flex">
            <img
              className={styles["icon"]}
              src="/icons/instagram.svg"
              alt="logo"
            />
            <span className="leading-[20px]">altis_mebel</span>
          </div>
        </li>
      </ul>
      <div className={styles["footer-contact-links"]}>
        <span className="mr-[8px] leading-[20px]">Contact with developers</span>
        <img
          className={styles["icon"]}
          src="/icons/instagram.svg"
          alt="instagram icon"
        />
        <img
          className={styles["icon"]}
          src="/icons/linkedin.svg"
          alt="linkedin icon"
        />
      </div>
    </div>
  );
};
export default Footer;
