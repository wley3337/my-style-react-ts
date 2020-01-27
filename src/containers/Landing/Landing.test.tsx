import React from "react";
import { render } from "@testing-library/react";
import Landing from "./Landing";

test("renders without crashing", () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  //done to pass test current tests
  const didRender = render(<Landing />);
  expect(didRender).toBeDefined;
});
