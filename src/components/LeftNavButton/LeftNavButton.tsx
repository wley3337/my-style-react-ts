import React from "react";
import * as css from "./LeftNavButton.css";

export interface ILeftNavButtonProps {
  title: string;
  callBack: (args: any | null) => void;
}

export const LeftNavButton: React.FC<ILeftNavButtonProps> = ({
  title,
  callBack
}) => {
  return (
    <div className={css.main} onClick={callBack} role="button">
      {title}
    </div>
  );
};

export default LeftNavButton;
