import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import * as css from "./LoginForm.css";
import { RouteComponentProps, Link } from "react-router-dom";
import { ISubLoginForm } from "../../redux/SubLoginForm.redux/SubLoginForm.types";

interface ILoginFormProps extends RouteComponentProps {
  //actions
  subLoginForm: (subLoginFormObj: ISubLoginForm) => void;
}

export interface ILoginForm {
  username: string;
  password: string;
}
export const LoginForm: React.FC<ILoginFormProps> = ({
  subLoginForm,
  history
}) => {
  const initLoginForm: ILoginForm = { username: "", password: "" };

  const [loginForm, setLoginForm] = useState(initLoginForm);

  return (
    <div className={css.body}>
      <span className={css.frame}>
        <div className={css.title}>
          <p className={css.myText}>My</p>
          <p className={css.styleText}>Style</p>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            subLoginForm({ loginForm: loginForm, history: history });
          }}
          className={css.form}
        >
          <label className={css.label}>
            username
            <input
              type="text"
              aria-label="username"
              aria-required="true"
              name="Username"
              className={css.input}
              onChange={e =>
                setLoginForm({ ...loginForm, username: e.target.value })
              }
            />
          </label>
          <label className={css.label}>
            password
            <input
              type="password"
              aria-label="password"
              aria-required="true"
              name="Password"
              className={css.input}
              onChange={e =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
            />
          </label>
          <input
            type="submit"
            aria-label="Login"
            name="login"
            value="Login"
            className={css.button}
          />
        </form>
        <Link to="/create-user" className={css.link}>
          Create Account
        </Link>
      </span>
    </div>
  );
};

export default connect(null, actions)(LoginForm);
