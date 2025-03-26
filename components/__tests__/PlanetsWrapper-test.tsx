import { render } from "@testing-library/react-native";
import PlanetsWrapper from "../Wrapper/PlanetsWrapper/PlanetsWrapper";
import { JSX } from "react";

describe("<PlanetsWrapper />", () => {
  let wrapper: JSX.Element;
  beforeEach(() => {
    wrapper = <PlanetsWrapper />;
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
