// VacancyCard.tsx
import { FC } from "react";
import styles from "./CarpenterCareerCard.module.scss";

type VacancyCardProps = {
  vacancy: {
    candidateRequirements: {
      title: string;
      items: string[];
    };
    responsibilities: {
      title: string;
      items: string[];
    };
    benefits: {
      title: string;
      items: string[];
    };
    contactInfo: {
      message: string;
      phone: string;
    };
  };
};

const VacancyCard: FC<VacancyCardProps> = ({ vacancy }) => {
  const { candidateRequirements, responsibilities, benefits, contactInfo } =
    vacancy;

  return (
    <div className={styles.vacancyCard}>
      <h3 className={styles.title}>{candidateRequirements.title}</h3>
      <ul className={styles.list}>
        {candidateRequirements.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className={styles.title}>{responsibilities.title}</h3>
      <ul className={styles.list}>
        {responsibilities.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className={styles.title}>{benefits.title}</h3>
      <ul className={styles.list}>
        {benefits.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <span className={styles.message}>{contactInfo.message}</span>
      <span className={styles.phone}>{contactInfo.phone}</span>
    </div>
  );
};

export default VacancyCard;
