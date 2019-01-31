import React from "react";
import MapSide from "../src/MapSide";
import renderer from "react-test-renderer";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

describe("MapBox tests", () => {
  let MapBoxElement;

  beforeEach(() => {
    MapBoxElement = renderer.create(<MapSide side={1} map={8} isback={true} />);
  });

  it("Should Render correctly", () => {
    let tree = MapBoxElement.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
