import { FC } from "react";
import styles from "./DesktopMenu.module.scss";
import Link from "next/link";
import Button from "@/app/components/shared/Button";
const DesktopMenu: FC = () => {
  return (
    <div className={styles["desktop-menu-wrapper"]}>
      <img className={styles["logo"]} src="/icons/logo.svg" alt="logo" />
      <ul className={styles["desktop-menu"]}>
        <li>
          <Link href="/"> Головна</Link>
        </li>
        <li>
          <Link href="/portfolio">Портфоліо</Link>
        </li>
        <li>
          <Link href="/career">Кар’єра</Link>
        </li>
        <li>
          <Link href="/faq">FAQs</Link>
        </li>
        <li>
          <Link href="#contact-us">
            <Button text="Замовити" className={styles.orderButton} />
          </Link>
        </li>
        <li>+38(068) 459 13 11</li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
