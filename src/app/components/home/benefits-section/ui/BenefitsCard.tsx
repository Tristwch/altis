import { FC } from "react";
import styles from "./BenefitsCard.module.scss";
type TBenefitsCardProps = {
  src: string;
  text: string;
};

const BenefitsCard: FC<TBenefitsCardProps> = (props) => {
  const { src, text } = props;
  return (
    <div className={styles.benefitsCard}>
      <img src={src} alt="benefits image" className={styles.image} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default BenefitsCard;
