import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

import "./App.css";
import { LoginForm } from "../../components/LoginForm/LoginForm";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <LoginForm />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
