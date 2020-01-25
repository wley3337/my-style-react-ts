import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import * as css from "./LoginForm.css";

interface IProps {}
export interface ILoginForm {
  username: string;
  password: string;
}
export const LoginForm: React.FC<IProps> = () => {
  const initLoginForm: ILoginForm = { username: "", password: "" };

  const [loginForm, setLoginForm] = useState(initLoginForm);

  return (
    <form onSubmit={e => e.preventDefault()} className={css.form}>
      <label className={css.label}>
        Username
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
        Password
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
      <input type="submit" aria-label="Login" name="login" value="Login" />
    </form>
  );
};

export default connect(null, actions)(LoginForm);
