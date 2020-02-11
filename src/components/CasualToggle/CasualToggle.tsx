import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { AppState } from "../../redux/rootReducer";
import * as css from "./CasualToggle.css";
import {
  ICasualBooleanTrueAction,
  ICasualBooleanFalseAction
} from "../../redux/CasualBoolean.redux/CausalBoolean.types";

interface ICasualToggleProps {
  //actions
  setCasualTrue: () => ICasualBooleanTrueAction;
  setCasualFalse: () => ICasualBooleanFalseAction;
  //state
  casual: boolean;
}

export const CasualToggle: React.FC<ICasualToggleProps> = ({
  setCasualTrue,
  setCasualFalse,
  casual
}) => {
  const handleClick: () => void = casual ? setCasualFalse : setCasualTrue;
  const displayText: string = casual ? "Casual" : "Dressy";
  console.log(casual);
  return (
    <div className={css.main}>
      <label className={`${css.toggleSwitch} `}>
        <input
          className={css.switchInput}
          type="checkbox"
          checked={!!casual}
          onChange={handleClick}
        />
        <span
          className={`${css.switchLabel} `}
          data-on="Casual"
          data-off="Dressy"
        ></span>
        <span className={`${css.switchHandle} handle`} data-fill=" "></span>
      </label>
      {/* Casual: {`${casual}`} */}
    </div>
  );
};

const mSTP = (state: AppState) => {
  return { casual: state.casualBoolean };
};

export default connect(mSTP, actions)(CasualToggle);

{
  /* <label class="switch switch-left-right">
	<input class="switch-input" type="checkbox" />
	<span class="switch-label" data-on="On" data-off="Off"></span> 
	<span class="switch-handle"></span> 
</label> */
}
