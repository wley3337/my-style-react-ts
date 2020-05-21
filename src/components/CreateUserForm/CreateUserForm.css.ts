import { style } from "typestyle";
import { darkGray, lightGray, midDarkBlue } from "../../globalColorDef.css";

export const body = style({
  width: "100vw",
  height: "100vh",
  display: "grid",
  backgroundColor: `${lightGray} `,
  gridTemplateColumns: ".5fr 22rem .5fr",
  gridTemplateRows: ".5fr .5fr .5fr .2fr",
  gridTemplateAreas: ` 'x img y' 'x frame y' 'x frame y' 'b b b'`
});

export const frame = style({
  gridArea: "frame",
  display: "grid",
  gridTemplateRows: ".5fr .2fr",
  gridTemplateAreas: "'form' 'link' "
});

export const img = style({
  width: "100%",
  gridArea: "img",
  objectFit: "cover",
  margin: "0rem"
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
