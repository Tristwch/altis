import { FC } from "react";
import styles from "./ExpirianceSection.module.scss";

const ExpirianceSection: FC = () => {
  return (
    <section className={styles.expirianceSection}>
      <div className={styles.leftColumn}>
        <h2 className={styles.title}>
          Ми спеціалізуємося на створенні унікальних меблів враховуючи всі ваші
          побажання
        </h2>
        <p className={styles.text}>
          Кожен наш виріб - неповторний, адже ми дбаємо про кожну деталь, щоб
          ваші меблі були не тільки красивими, але й зручними та
          функціональними.{" "}
        </p>
        <p className={styles.text}>
          Долучайтесь до нашої спільноти задоволених клієнтів і насолоджуйтесь
          унікальними рішеннями для вашого інтер'єру!
        </p>
      </div>
      <div>
        <div className={styles.expirianceTextWrapper}>
          <span className={styles.largeText}>14+ років</span>
          <span className={styles.smallText}>досвіду на ринку</span>
        </div>
        <div className={styles.happyClientsTextWrapper}>
          <img
            src="/icons/heart.svg"
            alt="heart"
            className={styles.heartIcon}
          />
          <span className={styles.largeText}>Тисячі</span>
          <span className={styles.smallText}>задоволених клієнтів</span>
        </div>
      </div>
    </section>
  );
};

export default ExpirianceSection;
