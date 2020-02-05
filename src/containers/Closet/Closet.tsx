import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { AppState } from "../../redux/rootReducer";

interface IClosetProps {}

export const Closet: React.FC<IClosetProps> = () => {
  return <div>Closet</div>;
};

const mSTP = (state: AppState) => {
  return {};
};

export default connect(mSTP, actions)(Closet);
