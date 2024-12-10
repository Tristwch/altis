import { FC, ReactElement } from "react";
import styles from "./Container.module.scss";

type TContainerProps = {
  children: ReactElement;
};

const Container: FC<TContainerProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
