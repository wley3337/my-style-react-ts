import React from "react";
import * as css from "./RightNavButton.css";

export interface IRightNavButtonProps {
  title: string;
  callBack: (args: any | null) => void;
}

export const RightNavButton: React.FC<IRightNavButtonProps> = ({
  title,
  callBack
}) => {
  return (
    <div className={css.main} onClick={callBack} role="button">
      {title}
    </div>
  );
};

export default RightNavButton;
