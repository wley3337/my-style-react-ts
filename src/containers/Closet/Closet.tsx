import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { AppState } from "../../redux/rootReducer";
import * as css from "./Closet.css";
import accessories from "../../imgs/accessories.png";
import tops from "../../imgs/tops.png";
import bottoms from "../../imgs/bottoms.png";
import shoes from "../../imgs/shoes.png";
import MenuButton from "../../components/MenuButton/MenuButton";

interface IClosetProps {}

export const Closet: React.FC<IClosetProps> = () => {
  return (
    <div className={css.grid}>
      <div className={css.titleBlock}>ADD OUTFIT</div>
      <div className={css.menuContainer}>
        <p className={css.heading}>Start With</p>
        <div className={css.menuOptions}>
          <MenuButton
            title="Accessories"
            imgSrc={accessories}
            alt="accessories icon"
          />
          <MenuButton title="Tops" imgSrc={tops} alt="top icon" />
          <MenuButton title="Bottoms" imgSrc={bottoms} alt="bottom icon" />
          <MenuButton title="Shoes" imgSrc={shoes} alt="shoes icon" />
        </div>
      </div>
      <div className={css.footer}>Footer</div>
    </div>
  );
};

const mSTP = (state: AppState) => {
  return {};
};

export default connect(mSTP, actions)(Closet);
