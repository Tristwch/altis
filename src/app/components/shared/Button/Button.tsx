import { FC } from "react";
import styles from "./Button.module.scss";

type TButtonProps = {
  text: string;
  className?: string;
};

const Button: FC<TButtonProps> = ({ text, className }) => {
  return <button className={`${styles.button} ${className}`}>{text}</button>;
};

export default Button;
