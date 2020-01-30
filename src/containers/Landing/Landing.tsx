import React from "react";
import { Route } from "react-router";
import LoginForm from "../../components/LoginForm/LoginForm";
import CreateUserForm from "../../components/CreateUserForm/CreateUserForm";
import { connect } from "react-redux";
import { AppState } from "../../redux/rootReducer";
import { IUser } from "../../redux/User.redux/User.types";
interface ILandingProps {
  //state
  user: IUser;
}

export const Landing: React.FC<ILandingProps> = ({ user }) => {
  return (
    <div>
      {localStorage.getItem("myStyle-Token") && !user.username
        ? "login"
        : "already logged int"}
      <Route exact path="/" render={p => <LoginForm {...p} />} />
      <Route
        exact
        path="/create-account"
        render={p => <CreateUserForm {...p} />}
      />
    </div>
  );
};

const mSTP = (state: AppState) => {
  return { user: state.user };
};

export default connect(mSTP)(Landing);
