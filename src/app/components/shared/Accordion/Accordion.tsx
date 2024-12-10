import { FC } from "react";

import styles from "./Accordion.module.scss";

type TAccordionProps = {
  faqList: { question: string; answer: string; id: number }[];
};

const Accordion: FC<TAccordionProps> = ({ faqList }) => {
  return (
    <ul className={styles.accordion}>
      {faqList.map((item) => {
        return (
          <li key={item.id} className={styles.accordionItem}>
            <button>
              <span>{item.question}</span>
              <span></span>{" "}
            </button>
            <p>{item.answer}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Accordion;
