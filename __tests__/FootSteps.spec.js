import React from "react";
import FootSteps from "../src/FootSteps";
import renderer from "react-test-renderer";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

describe("FootSteps tests", () => {
  let FootStepsElement;

  beforeEach(() => {
    FootStepsElement = renderer.create(
      <FootSteps name="Harry Potter" number={2} />
    );
  });

  it("Should Render correctly", () => {
    let tree = FootStepsElement.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
