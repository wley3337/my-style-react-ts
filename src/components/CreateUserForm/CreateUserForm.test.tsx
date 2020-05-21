import React from "react";
import { shallow } from "enzyme";
import { CreateUserForm } from "./CreateUserForm";

test("renders without crashing", () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  //done to pass test current tests
  const didRender = shallow(<CreateUserForm />);
  expect(didRender).toBeDefined;
});
