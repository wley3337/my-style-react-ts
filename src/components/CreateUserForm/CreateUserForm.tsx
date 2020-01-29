import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import createAccount from "../../imgs/create-account-bg.png";
import { RouteComponentProps, Link } from "react-router-dom";
import * as css from "./CreateUserForm.css";

interface ICreateUserFormProps extends RouteComponentProps {
  //actions
}

export interface ICreateUserForm {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export const CreateUserForm: React.FC<ICreateUserFormProps> = () => {
  const initCreateUserForm: ICreateUserForm = {
    firstName: "",
    lastName: "",
    username: "",
    password: ""
  };

  const [createUserForm, setCreateUserFrom] = useState(initCreateUserForm);
  return (
    <div className={css.body}>
      <img
        className={css.img}
        src={createAccount}
        alt="empty superhero on pedestal with robotic arms holding cape and mask"
        aria-label="empty superhero on pedestal with robotic arms holding cape and mask"
      />

      <span className={css.frame}>
        <form
          onSubmit={e => {
            e.preventDefault();
            //   subLoginForm({ loginForm: loginForm, history: history });
          }}
          className={css.form}
        >
          <label className={css.label}>
            First Name
            <input
              type="text"
              aria-label="First Name"
              aria-required="true"
              name="First Name"
              className={css.input}
              onChange={e =>
                setCreateUserFrom({
                  ...createUserForm,
                  firstName: e.target.value
                })
              }
            />
          </label>
          <label className={css.label}>
            Last Name
            <input
              type="text"
              aria-label="Last Name"
              aria-required="true"
              name="Last Name"
              className={css.input}
              onChange={e =>
                setCreateUserFrom({
                  ...createUserForm,
                  lastName: e.target.value
                })
              }
            />
          </label>
          <label className={css.label}>
            Username
            <input
              type="text"
              aria-label="Username"
              aria-required="true"
              name="Username"
              className={css.input}
              onChange={e =>
                setCreateUserFrom({
                  ...createUserForm,
                  username: e.target.value
                })
              }
            />
          </label>
          <label className={css.label}>
            Password
            <input
              type="password"
              aria-label="Password"
              aria-required="true"
              name="Password"
              className={css.input}
              onChange={e =>
                setCreateUserFrom({
                  ...createUserForm,
                  password: e.target.value
                })
              }
            />
          </label>
          <input
            type="submit"
            aria-label="Create Account"
            name="createAccount"
            value="Create Account"
            className={css.button}
          />
        </form>
        <Link to="/" className={css.link}>
          Back to Login
        </Link>
      </span>
    </div>
  );
};

export default connect(null, actions)(CreateUserForm);
