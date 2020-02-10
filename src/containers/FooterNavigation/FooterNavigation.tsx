import React from "react";
import * as css from "./FooterNavigation.css";
import { RouteComponentProps } from "react-router-dom";

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
      <div className={css.leftButton}>leftButton</div>
      <div className={css.option}>{optionReturn(location.pathname)}</div>
      <div className={css.rightButton}>rightButton</div>
    </div>
  );
};

export default FooterNavigation;
