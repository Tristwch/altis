import { FC } from "react";
import Link from "next/link";
import styles from "./MobileMenu.module.scss";

const MobileMenu: FC = () => {
  return (
    <nav className={styles.mobileMenuContainer}>
      <ul className={styles.mobileMenu}>
        <li>
          <Link href="/" role="menuitem" className={styles.link}>
            <img className={styles.icon} src="/icons/home.svg" alt="home" />
            <span>Головна</span>
          </Link>
        </li>
        <li>
          <Link href="/about" role="menuitem" className={styles.link}>
            <img
              className={styles.icon}
              src="/icons/portfolio.svg"
              alt="portfolio"
            />
            <span>Портфоліо</span>
          </Link>
        </li>
        <li>
          <Link href="/services" role="menuitem" className={styles.link}>
            <img className={styles.icon} src="/icons/career.svg" alt="career" />
            <span>Кар’єра</span>
          </Link>
        </li>
        <li>
          <Link href="/contact" role="menuitem" className={styles.link}>
            <img className={styles.icon} src="/icons/call.svg" alt="call" />
            <span>Замовити</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
