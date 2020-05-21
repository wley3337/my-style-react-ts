import React from "react";


interface IAutoLoginProps extends RouteComponentProps {
  //actions
  autoLogin: (history: History) => IAutoLoginAction;
}

export const AutoLogin: React.FC<IAutoLoginProps> = ({
  history,
  autoLogin
}) => {
  autoLogin(history);
  return <div>Logging in</div>;
};

export default connect(null, actions)(AutoLogin);
