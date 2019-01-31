import React from "react";
import MapFlap from "../src/MapFlap";
import renderer from "react-test-renderer";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

describe("MapFlap tests", () => {
  let MapFlapElement;

  beforeEach(() => {
    MapFlapElement = renderer.create(<MapFlap number={1} />);
  });

  it("Should Render correctly", () => {
    let tree = MapFlapElement.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
