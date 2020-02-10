import React from "react";
import { shallow } from "enzyme";
import { FooterNavigation } from "./FooterNavigation";

test("renders without crashing", () => {
  const didRender = shallow(<FooterNavigation />);
  expect(didRender).toBeDefined;
});
