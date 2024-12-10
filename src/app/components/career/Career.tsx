"use client";
import { FC } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import CareerAccordionItemHeader from "./ui/career-accordion-item-header/CareerAccordionItemHeader";
import { careerList } from "./constants";
import { TAccordionItemStatus } from "../faq/Faq";
import styles from "./Career.module.scss";
const Career: FC = () => {
  return (
    <section className={styles.accordion}>
      <Accordion transition={true} transitionTimeout={300}>
        {careerList.map((item) => (
          <AccordionItem
            header={(title) => {
              return (
                <CareerAccordionItemHeader
                  title={item.title}
                  status={title.state.status as TAccordionItemStatus}
                  subtitle={item.subtitle}
                  location={item.location}
                  isRemote={item.isRemote}
                />
              );
            }}
            key={item.id}
            className={styles.accordionItem}
          >
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Career;
