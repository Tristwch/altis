import { FC } from "react";
import styles from "./Tag.module.scss";
type TTagProps = {
  title: string;
};
const Tag: FC<TTagProps> = ({ title }) => {
  return <span className={styles.tag}>{title}</span>;
};

export default Tag;
