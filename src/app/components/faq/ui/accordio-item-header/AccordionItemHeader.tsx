import { FC } from "react";
import { TAccordionItemStatus } from "../../Faq";

import styles from "./AccordionItemHeader.module.scss";

type TAccordionItemHeaderProps = {
  title: string;
  status: TAccordionItemStatus;
};

const AccordionItemHeader: FC<TAccordionItemHeaderProps> = ({
  title,
  status,
}) => {
  return (
    <div className={styles.accordionItemHeader}>
      <span className={styles.title}>{title}</span>

      <div
        className={`${styles.toggleBtn} ${styles[status]}`}
        aria-label="Toggle accordion"
      >
        <span className={styles.horizontalBar}></span>
        <span className={styles.verticalBar}></span>
      </div>
    </div>
  );
};

export default AccordionItemHeader;
