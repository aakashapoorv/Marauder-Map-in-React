import React from "react";
import App from "../src/App";
import renderer from "react-test-renderer";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

describe("App tests", () => {
  let AppElement;

  beforeEach(() => {
    AppElement = renderer.create(<App />);
  });

  it("Should Render correctly", () => {
    let tree = AppElement.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
