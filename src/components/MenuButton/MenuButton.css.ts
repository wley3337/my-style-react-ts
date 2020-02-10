import { style } from "typestyle";
import { darkBlue, lightGray, darkGray } from "../../globalColorDef.css";

export const grid = style({
  background: `linear-gradient(180deg, ${lightGray} 62.5%, ${darkBlue} 100%), #FFFFFF`,
  display: "grid",
  padding: ".2rem .2rem",
  gridTemplateColumns: ".3fr .7fr",
  gridTemplateAreas: "'icon title'"
});

export const img = style({
  gridArea: "icon",
  objectFit: "fill",
  width: "100%"
});

export const title = style({
  color: darkGray,
  placeSelf: "center center",
  gridArea: "title"
});
