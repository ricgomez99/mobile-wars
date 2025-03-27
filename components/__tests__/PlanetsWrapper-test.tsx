import { render } from "@testing-library/react-native";
import { JSX } from "react";
import WrapperMockPlanet from "../WrapperMock/WrapperMockPlanet";

describe("<PlanetsWrapper />", () => {
  let wrapper: JSX.Element;
  beforeEach(() => {
    wrapper = <WrapperMockPlanet />;
  });

  it("should render", () => {
    render(wrapper);
  });

  it("should display the planet cards", () => {
    const { getAllByTestId } = render(wrapper);

    expect(getAllByTestId("planetCard")).toBeDefined();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
