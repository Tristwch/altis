import { FC } from "react";
import styles from "./CooperationStepsSection.module.scss";

const CooperationStepsSection: FC = () => {
  return (
    <section className={styles.cooperationSection}>
      <h2 className={styles.title}>Етапи співпраці</h2>
      <ul className={styles.cooperationList}>
        <li className={styles.cooperationStep}>
          <div className={styles.ellipse}>
            <img src="/icons/1.svg" alt="number 1" />
          </div>
          <span className={styles.mainText}>Консультація по телефону</span>
        </li>
        <li className={styles.cooperationStep}>
          <div className={styles.ellipse}>
            <img src="/icons/2.svg" alt="number 2" />
          </div>
          <div className={styles.textContainer}>
            <span className={styles.mainText}>
              Зустріч та обговорення побажань
            </span>
            <span className={styles.secondText}>
              Також можливо в онлайн режимі
            </span>
          </div>
        </li>
        <li className={styles.cooperationStep}>
          <div className={styles.ellipse}>
            <img src="/icons/3.svg" alt="number 3" />
          </div>
          <div className={styles.textContainer}>
            <span className={styles.mainText}>Розробка дизайну</span>
            <span className={styles.secondText}>
              Можлива співпраця з вашим дизайнером
            </span>
          </div>
        </li>
        <li className={styles.cooperationStep}>
          <div className={styles.ellipse}>
            <img src="/icons/4.svg" alt="number 4" />
          </div>
          <span className={styles.mainText}>
            Уточнення матеріалів та замір розмірів
          </span>
        </li>
        <li className={styles.cooperationStep}>
          <div className={styles.ellipse}>
            <img src="/icons/5.svg" alt="number 5" />
          </div>
          <span className={styles.mainText}>
            Розрахунок вартості замовлення
          </span>
        </li>
        <li className={styles.cooperationStep}>
          <div className={styles.ellipse}>
            <img src="/icons/6.svg" alt="number 6" />
          </div>
          <span className={styles.mainText}>
            Погодження проєкту та запуск його у виробництво
          </span>
        </li>
        <li className={styles.cooperationStep}>
          <div className={styles.ellipse}>
            <img src="/icons/7.svg" alt="number 7" />
          </div>
          <span className={styles.mainText}>Доставка та встановлення</span>
        </li>
      </ul>
    </section>
  );
};

export default CooperationStepsSection;
