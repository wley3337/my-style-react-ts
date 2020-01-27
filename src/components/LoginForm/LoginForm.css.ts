import { style } from "typestyle";
import loginBG from "../../imgs/login-bg.png";
import {
  darkGray,
  lightGray,
  lightGray60,
  midDarkBlue
} from "../../globalColorDef.css";

export const body = style({
  background: `url("${loginBG}") no-repeat center`,
  width: "100vw",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "1fr 20rem 1fr",
  gridTemplateRows: ".5fr .5fr .5fr .2fr",
  gridTemplateAreas: ` 'x z y' 'x frame y' 'x frame y' 'b b b'`
});

export const frame = style({
  gridArea: "frame",
  backgroundColor: `${lightGray60} `,
  borderRadius: "2rem",
  display: "grid",
  gridTemplateRows: "1fr .5fr .2fr",
  gridTemplateAreas: "'title' 'form' 'link' "
});

export const title = style({
  gridArea: "title",
  placeSelf: "end center",
  display: "grid",
  gridTemplateColumns: "repeat(9, 2rem)",
  gridTemplateRows: "repeat(4, 2rem)"
});

export const myText = style({
  gridColumn: "4 / span 2 ",
  gridRow: "1 / span 2",
  fontSize: "3.5rem",
  margin: 0,
  color: darkGray
});

export const styleText = style({
  gridColumn: "3 / span 3",
  gridRow: "2 / span 1",
  margin: 0,
  fontSize: "5rem",
  color: darkGray
});
export const form = style({
  gridArea: "form",
  placeSelf: "start center",
  color: darkGray
});

export const label = style({
  fontSize: ".75rem",
  $nest: {
    //all children
    "&>*": {
      display: "block",
      marginBottom: ".5rem"
    }
  }
});

export const input = style({
  backgroundColor: midDarkBlue,
  fontWeight: 500,
  fontSize: "1rem",
  color: lightGray
});

export const button = style({
  display: "block",
  margin: "1rem auto",
  fontSize: ".75rem",
  padding: ".3rem .75rem",
  backgroundColor: midDarkBlue,
  color: lightGray,
  borderRadius: ".5rem"
});

export const link = style({
  gridArea: "link",
  placeSelf: "center end",
  margin: "0rem auto"
});
