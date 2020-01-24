import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import { LoginForm } from "./LoginForm";

describe("<LoginForm/>", () => {
  it("renders without crashing", () => {
    const didRender = shallow(<LoginForm />);
    expect(didRender).toBeDefined;
  });
});
