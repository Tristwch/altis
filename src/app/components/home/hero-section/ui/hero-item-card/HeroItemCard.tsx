import { FC, SVGProps } from "react";
import styles from "./HeroItemCard.module.scss";

type TCardProps = {
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
};

const HeroItemCard: FC<TCardProps> = ({ text, Icon }) => {
  return (
    <div className={styles.card}>
      <Icon className={styles.img} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default HeroItemCard;
