import React from "react";
import { Route } from "react-router";
import LoginForm from "../../components/LoginForm/LoginForm";
import CreateUserForm from "../../components/CreateUserForm/CreateUserForm";

interface ILandingProps {}

export const Landing: React.FC<ILandingProps> = () => {
  return (
    <div>
      <Route exact path="/" render={p => <LoginForm {...p} />} />
      <Route
        exact
        path="/create-account"
        render={p => <CreateUserForm {...p} />}
      />
    </div>
  );
};

export default Landing;
