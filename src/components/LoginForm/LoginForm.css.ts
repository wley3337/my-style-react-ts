import { style } from "typestyle";
import { midBlue, darkGray, lightGray } from "../../globalColorDef.css";

export const form = style({
  color: darkGray
});

export const label = style({
  fontSize: ".75rem",
  $nest: {
    //all children
    "&>*": {
      display: "block"
    }
  }
});

export const input = style({
  backgroundColor: midBlue,
  fontWeight: 500,
  fontSize: "1rem",
  color: lightGray
});
