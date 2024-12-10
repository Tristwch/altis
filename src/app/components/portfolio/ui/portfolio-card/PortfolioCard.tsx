import { FC } from "react";
import Image from "next/image";
import styles from "./PortfolioCard.module.scss";

type TPortfolioCardProps = {
  title: string;
  src: string;
};

const PortfolioCard: FC<TPortfolioCardProps> = ({ title, src }) => {
  return (
    <div className={styles.portfolioCard}>
      <Image
        src={src}
        alt={`${title} image`}
        className={styles.img}
        fill={true}
        sizes="(max-width: 480px) 178px, 
         (max-width: 768px) 338px, 
         (max-width: 1200px) 440px, 
         "
        priority={true}
      />
      <div className={styles.overlay}>
        <span className={styles.title}>{title}</span>
        <span className={styles.icon}>→</span>
      </div>
    </div>
  );
};

export default PortfolioCard;
