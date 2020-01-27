import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

import "./App.css";
import Landing from "../Landing/Landing";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={Landing} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
