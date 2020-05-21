import { style } from "typestyle";

export const grid = style({
  height: "100vh",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  gridTemplateAreas: `'title' 'menu' 'footer'`
});

export const titleBlock = style({
  gridArea: "title",
  width: "100%",
  margin: ".1rem 0rem"
});

export const menuContainer = style({
  gridArea: "menu",
  overflowY: "scroll"
});
export const heading = style({
  textAlign: "center",
  margin: ".2rem 0rem"
});
export const menuOptions = style({});

export const footer = style({
  gridArea: "footer"
});
