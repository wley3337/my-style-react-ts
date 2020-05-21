import { style } from "typestyle";

export const grid = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr auto 1fr",
  gridColumnGap: ".2rem",
  alignItems: "center"
});

export const leftButton = style({
  gridColumn: "1/span 1"
});

export const option = style({
  gridColumnStart: "2"
});

export const rightButton = style({
  gridColumn: "-1/span 1"
});
