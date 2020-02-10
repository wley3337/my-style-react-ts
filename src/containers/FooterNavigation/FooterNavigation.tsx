import React from "react";
import * as css from "./FooterNavigation.css";
import { RouteComponentProps } from "react-router-dom";
import LeftNavButton from "../../components/LeftNavButton/LeftNavButton";
import RightNavButton from "../../components/RightNavButton/RightNavButton";

export interface IFooterNavigationProps extends RouteComponentProps {}

const optionReturn = (location: string): React.FC | string => {
  switch (true) {
    default:
      return `options are: ${location}`;
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
        <RightNavButton title="Tags" callBack={() => console.log("logout")} />
      </div>
    </div>
  );
};

export default FooterNavigation;
