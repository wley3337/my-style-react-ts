import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as actions from '../../redux/actions';
import { History } from 'history';
import { IAutoLoginAction } from '../../redux/AutoLogin.redux/AutoLogin.types';
import { connect } from 'react-redux';

interface IAutoLoginProps extends RouteComponentProps {
  //actions
  autoLogin: (history: History) => IAutoLoginAction;
}

export const AutoLogin: React.FC<IAutoLoginProps> = ({
  history,
  autoLogin,
}) => {
  autoLogin(history);
  return <div>Logging in</div>;
};

export default connect(null, actions)(AutoLogin);
