import React from "react";
import { Route } from "react-router";
import * as css from "./Landing.css";
import LoginForm from "../../components/LoginForm/LoginForm";

interface ILandingProps {}

export const Landing: React.FC<ILandingProps> = () => {
  return (
    <div className={css.body}>
      <Route exact path="/" render={p => <LoginForm {...p} />} />
    </div>
  );
};

export default Landing;
