import React from "react";
import * as css from "./FooterNavigation.css";
import { RouteComponentProps } from "react-router-dom";
import LeftNavButton from "../../components/LeftNavButton/LeftNavButton";
import RightNavButton from "../../components/RightNavButton/RightNavButton";
import CasualToggle from "../../components/CasualToggle/CasualToggle";

export interface IFooterNavigationProps extends RouteComponentProps {}

const optionReturn = (pathName: string) => {
  switch (true) {
    case pathName === "/closet":
      return <CasualToggle />;
    default:
      return `options are: ${pathName}`;
  }
};

export const FooterNavigation: React.FC<IFooterNavigationProps> = ({
  location
}) => {
  return (
    <div className={css.grid}>
      <div className={css.leftButton}>
        <LeftNavButton title="Log Out" callBack={() => console.log("logout")} />
      </div>
      <div className={css.option}>{optionReturn(location.pathname)}</div>
      <div className={css.rightButton}>
        <RightNavButton title="Tags" callBack={() => console.log("tags")} />
      </div>
    </div>
  );
};

export default FooterNavigation;
