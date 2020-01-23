import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";

import "./App.css";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>Working</div>
      </Router>
    </Provider>
  );
};

export default App;
