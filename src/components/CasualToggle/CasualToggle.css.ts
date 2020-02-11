import { style } from "typestyle";
import { darkGray } from "../../globalColorDef.css";

export const main = style({
  border: `solid .1rem ${darkGray}`,
  width: "100%"
});

export const toggleSwitch = style({
  position: "relative",
  display: "block",
  verticalAlign: "top",
  width: "100px",
  height: "30px",
  padding: "3px",
  margin: "0 10px 10px 0",
  background: "linear-gradient(to bottom, #eeeeee, #FFFFFF 25px)",
  backgroundImage: "-webkit-linear-gradient(top, #eeeeee, #FFFFFF 25px)",
  borderRadius: "18px",
  boxShadow: "inset 0 -1px white, inset 0 1px 1px rgba(0, 0, 0, 0.05)",
  cursor: "pointer",
  boxSizing: "content-box"
});

export const switchInput = style({
  position: "absolute",
  top: "0",
  left: "0",
  opacity: "0",
  boxSizing: "content-box"
});

export const switchLabel = style({
  overflow: "hidden",
  position: "relative",
  display: "block",
  height: "inherit",
  fontSize: "10px",
  textTransform: "uppercase",
  background: "#eceeef",
  borderRadius: "inherit",
  boxShadow:
    "inset 0 1px 2px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.15)",
  boxSizing: "content-box",
  $nest: {
    "&::before": {
      position: "absolute",
      top: "50%",
      marginTop: "-.5em",
      lineHeight: "1",
      "-webkit-transition": "inherit",
      "-moz-transition": "inherit",
      transition: "inherit",
      boxSizing: "content-box",
      content: "attr(data-off)",
      right: "11px",
      color: "#aaaaaa",
      textShadow: "0 1px rgba(255, 255, 255, 0.5)"
    },

    "&::after": {
      position: "absolute",
      top: "50%",
      marginTop: "-.5em",
      lineHeight: "1",
      "-webkit-transition": "inherit",
      "-moz-transition": "inherit",
      transition: "inherit",
      boxSizing: "content-box",
      content: "attr(data-on)",
      left: "11px",
      color: "#FFFFFF",
      textShadow: "0 1px rgba(0, 0, 0, 0.2)",
      opacity: "0"
    }
  }
});

export const switchLeftRight = style({
  overflow: "hidden",
  width: "20px",
  height: "20px",
  top: "4px",
  left: "0",
  right: "0",
  bottom: "0",
  padding: "11px 0 0 0",
  textIndent: "-12px",
  borderRadius: "20px",
  boxShadow:
    "inset 0 1px 4px rgba(0, 0, 0, 0.2), inset 0 0 3px rgba(0, 0, 0, 0.1)"
});

// export const switchLabel = style({
//   overflow: "hidden"
// });

// <style>

// .switch-input:checked ~ .switch-label:before {
// 	opacity: 0;
// }
// .switch-input:checked ~ .switch-label:after {
// 	opacity: 1;
// }
// .switch-handle {
// 	position: absolute;
// 	top: 4px;
// 	left: 4px;
// 	width: 28px;
// 	height: 28px;
// 	background: linear-gradient(to bottom, #FFFFFF 40%, #f0f0f0);
// 	background-image: -webkit-linear-gradient(top, #FFFFFF 40%, #f0f0f0);
// 	border-radius: 100%;
// 	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
// }
// .switch-handle:before {
// 	content: "";
// 	position: absolute;
// 	top: 50%;
// 	left: 50%;
// 	margin: -6px 0 0 -6px;
// 	width: 12px;
// 	height: 12px;
// 	background: linear-gradient(to bottom, #eeeeee, #FFFFFF);
// 	background-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF);
// 	border-radius: 6px;
// 	box-shadow: inset 0 1px rgba(0, 0, 0, 0.02);
// }
// .switch-input:checked ~ .switch-handle {
// 	left: 74px;
// 	box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);
// }

// /* Transition
// ========================== */
// .switch-label, .switch-handle {
// 	transition: All 0.3s ease;
// 	-webkit-transition: All 0.3s ease;
// 	-moz-transition: All 0.3s ease;
// 	-o-transition: All 0.3s ease;
// }
// </style>

// <style>
// /* Switch Left Right
// ==========================*/
// .switch-left-right .switch-label {
// 	overflow: hidden;
// }
// .switch-left-right .switch-label:before, .switch-left-right .switch-label:after {
// 	width: 20px;
// 	height: 20px;
// 	top: 4px;
// 	left: 0;
// 	right: 0;
// 	bottom: 0;
// 	padding: 11px 0 0 0;
// 	text-indent: -12px;
// 	border-radius: 20px;
// 	box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2), inset 0 0 3px rgba(0, 0, 0, 0.1);
// }
// .switch-left-right .switch-label:before {
// 	background: #eceeef;
// 	text-align: left;
// 	padding-left: 80px;
// }
// .switch-left-right .switch-label:after {
// 	text-align: left;
// 	text-indent: 9px;
// 	background: #FF7F50;
// 	left: -100px;
// 	opacity: 1;
// 	width: 100%;
// }
// .switch-left-right .switch-input:checked ~ .switch-label:before {
// 	opacity: 1;
// 	left: 100px;
// }
// .switch-left-right .switch-input:checked ~ .switch-label:after {
// 	left: 0;
// }
// .switch-left-right .switch-input:checked ~ .switch-label {
// 	background: inherit;
// }
// </style>
