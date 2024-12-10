import { FC } from "react";
import { cardsList } from "./constants";
import styles from "./Portfolio.module.scss";
import PortfolioCard from "./ui/portfolio-card";

const Portfolio: FC = () => {
  return (
    <section className={styles.portfolio}>
      <ul className={styles.cardList}>
        {cardsList.map(({ title, src }) => (
          <li key={title}>
            <PortfolioCard title={title} src={src} />
          </li>
        ))}
      </ul>
      <p className={styles.subtitle}>
        Крім типових замовлень, ми також можемо виробити меблі для ваших офісів,
        магазинів або закладів харчування.
      </p>
    </section>
  );
};

export default Portfolio;
