import React from "react";
import { shallow } from "enzyme";
import { RightNavButton } from "./RightNavButton";
test("renders without crashing", () => {
  const callBack = jest.fn();
  const didRender = shallow(
    <RightNavButton title="testLeftNav" callBack={callBack} />
  );
  expect(didRender).toBeDefined;
});
