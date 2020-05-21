import { style } from "typestyle";
import { darkBlue, lightGray, darkGray } from "../../globalColorDef.css";

export const grid = style({
  height: "6rem",
  width: "100%",
  background: `linear-gradient(180deg, ${lightGray} 62.5%, ${darkBlue} 100%), #FFFFFF`,
  display: "grid",
  margin: ".2rem 0rem",
  gridTemplateColumns: ".3fr .7fr",
  gridTemplateAreas: "'icon title'"
});

export const img = style({
  gridArea: "icon",
  alignSelf: "start",
  objectFit: "fill",
  maxHeight: "100%",
  maxWidth: "7rem",
  margin: "0 auto",
  padding: ".2rem 0rem"
});

export const title = style({
  color: darkGray,
  placeSelf: "center end",
  textAlign: "center",
  width: "100%",
  gridArea: "title"
});
