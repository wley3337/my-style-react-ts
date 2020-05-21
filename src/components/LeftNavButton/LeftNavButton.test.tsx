import React from "react";
import { shallow } from "enzyme";
import { LeftNavButton } from "./LeftNavButton";
test("renders without crashing", () => {
  const callBack = jest.fn();
  const didRender = shallow(
    <LeftNavButton title="testLeftNav" callBack={callBack} />
  );
  expect(didRender).toBeDefined;
});
