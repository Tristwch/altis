import { TAccordionItemStatus } from "@/app/components/faq/Faq";
import { FC } from "react";
import LocationIcon from "/public/icons/location.svg";
import ArrowDownIcon from "/public/icons/arrow-down.svg";
import styles from "./CareerAccordionItemHeader.module.scss";
import Tag from "@/app/components/shared/Tag";
type TCareerAccordionItemHeaderProps = {
  title: string;
  subtitle: string;
  location: string;
  jobType?: "full-time" | "part-time";
  isRemote?: boolean;
  status: TAccordionItemStatus;
};
const CareerAccordionItemHeader: FC<TCareerAccordionItemHeaderProps> = (
  props
) => {
  const { title, status, location, subtitle } = props;
  return (
    <div>
      <h2 className={styles.title}>
        {title}
        <ArrowDownIcon
          className={`${styles.arrowDownIcon} ${styles[status]}`}
        />
      </h2>
      <div className={styles.location}>
        <LocationIcon className={styles.locationIcon} />
        <span className={styles.locationText}>{location}</span>
      </div>
      <ul className={styles.tagList}>
        <li>
          <Tag title="Повна зайнятість" />
        </li>
        <li>
          <Tag title="На місці" />
        </li>
      </ul>
      <span className={styles.subtitle}>{subtitle}</span>
      {/* <div></div> */}
    </div>
  );
};

export default CareerAccordionItemHeader;
