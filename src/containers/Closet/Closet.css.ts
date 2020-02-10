import { style } from "typestyle";

export const grid = style({
  display: "grid",
  gridTemplateRows: ".3fr auto .3fr",
  gridTemplateAreas: `'title' 'menu' 'footer'`
});

export const titleBlock = style({
  gridArea: "title",
  width: "100%",
  margin: ".1rem 0rem"
});

export const menuContainer = style({
  gridArea: "menu"
});
export const heading = style({
  textAlign: "center",
  margin: ".2rem 0rem"
});
export const menuOptions = style({
  overflowY: "scroll"
});

export const footer = style({
  gridArea: "footer"
});
