import { FC } from "react";
import Container from "../../container";
import BenefitsCard from "./ui/BenefitsCard";

import { CARD_INFO } from "./consts";

import styles from "./BenefitsSection.module.scss";

const BenefitsSection: FC = () => {
  return (
    <div className={styles.benefitsSection}>
      <h2 className={styles.title}>Чому варто обирати нас</h2>
      <ul className={styles.cardList}>
        {CARD_INFO.map((item) => (
          <li key={item.text}>
            <BenefitsCard src={item.src} text={item.text} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BenefitsSection;
