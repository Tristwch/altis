"use client";
import { FC } from "react";
import { faqList } from "./constants";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

import styles from "./Faq.module.scss";
import AccordionItemHeader from "./ui/accordio-item-header";

export type TAccordionItemStatus = "entered" | "exited";

const Faq: FC = () => {
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>Часті питання</h2>
      <Accordion transition={true} transitionTimeout={250}>
        {faqList.map((item) => (
          <AccordionItem
            header={(title) => {
              return (
                <AccordionItemHeader
                  title={item.question}
                  status={title.state.status as TAccordionItemStatus}
                />
              );
            }}
            key={item.id}
          >
            {item.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;
