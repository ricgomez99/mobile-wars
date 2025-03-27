import { render } from "@testing-library/react-native";
import { filmMock } from "@/constants/films-mock";
import WrapperMockFilm from "../WrapperMock/WrapperMockFilm";
import { JSX } from "react";

describe("<FilmsWrapper />", () => {
  let wrapper: JSX.Element;

  beforeEach(() => {
    wrapper = <WrapperMockFilm />;
  });

  it("should render", () => {
    render(wrapper);
  });

  it("should display a card per each film", () => {
    const { getAllByTestId } = render(wrapper);
    const films = filmMock.length;

    expect(getAllByTestId("filmCard")).toHaveLength(films);
  });
});
