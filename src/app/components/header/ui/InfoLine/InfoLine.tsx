import { FC } from "react";
import Marquee from "react-fast-marquee";
import styles from "./InfoLine.module.scss";

const InfoLine: FC = () => {
  return (
    <div className={styles["info-line-container"]}>
      <Marquee>
        &nbsp;Акція! До 25.08.2024 розробка дизайну проєкту безкоштовна!
      </Marquee>
    </div>
  );
};

export default InfoLine;
