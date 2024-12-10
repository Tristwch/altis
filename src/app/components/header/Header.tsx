import { FC } from "react";
import DesktopMenu from "./ui/DesktopMenu";
import InfoLine from "./ui/InfoLine";

import styles from "./Header.module.scss";
const Header: FC = () => {
  return (
    <div className={styles["header-container"]}>
      {/* <InfoLine /> */}
      <DesktopMenu />
    </div>
  );
};

export default Header;
