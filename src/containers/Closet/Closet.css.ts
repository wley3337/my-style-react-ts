import { style } from "typestyle";

export const grid = style({
  height: "100vh",
  display: "grid",
  gridTemplateRows: ".3fr auto .3fr",
  gridTemplateAreas: `'title' 'menu' 'footer'`
});

export const titleBlock = style({
  gridArea: "title",
  textAlign: "center"
});

export const menuContainer = style({
  gridArea: "menu"
});
export const menuOptions = style({
  overflowY: "scroll"
});
export const heading = style({
  textAlign: "center"
});

export const footer = style({
  gridArea: "footer",
  placeSelf: "center center"
});
