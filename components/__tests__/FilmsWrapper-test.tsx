import { render, screen } from "@testing-library/react-native";
import FilmsWrapper from "../Wrapper/FilmsWrapper/FilmsWrapper";
import { filmMock } from "@/constants/films-mock";

describe("<FilmsWrapper />", () => {
  it("should render", () => {
    render(<FilmsWrapper />);
  });

  it("should display a card per each film", () => {
    const { getAllByTestId } = render(<FilmsWrapper />);
    const films = filmMock.length;

    expect(getAllByTestId("filmCard")).toHaveLength(films);
  });
});
