import React from "react";
import { shallow } from "enzyme";
import MenuButton from "./MenuButton";

test("renders without crashing", () => {
  const didRender = shallow(
    <MenuButton title="testButton" imgSrc="testSrc" alt="testAltText" />
  );
  expect(didRender).toBeDefined;
});
