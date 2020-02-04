import React from "react";
import { Route } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import CreateUserForm from "../../components/CreateUserForm/CreateUserForm";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { AppState } from "../../redux/rootReducer";
import { IUser } from "../../redux/User.redux/User.types";
import { History } from "history";
import AutoLogin from "../../components/AutoLogin/AutoLogin";
interface ILandingProps extends RouteComponentProps {
  //actions
  autoLogin: (history: History) => void;
  //state
  user: IUser;
}

export const Landing: React.FC<ILandingProps> = ({
  user,
  autoLogin,
  history
}) => {
  return (
    <div>
      {localStorage.getItem("myStyle-Token") && !user.username ? null : (
        <Route exact path="/" render={p => <AutoLogin {...p} />} />
      )}
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

export default connect(mSTP, actions)(Landing);
