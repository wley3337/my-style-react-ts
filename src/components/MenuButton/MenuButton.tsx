import React from "react";
import * as css from "./MenuButton.css";

interface IMenuButtonProps {
  imgSrc: string;
  alt: string;
  title: string;
}

const MenuButton: React.FC<IMenuButtonProps> = ({ imgSrc, title, alt }) => {
  return (
    <div className={css.grid}>
      <img src={imgSrc} alt={alt} aria-label={alt} className={css.img} />
      <p className={css.title}>{title}</p>
    </div>
  );
};

export default MenuButton;
