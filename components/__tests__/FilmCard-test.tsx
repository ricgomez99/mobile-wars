import { render } from "@testing-library/react-native";
import FilmCard from "../Cards/FilmCard/FilmCard";
import { JSX } from "react";

describe("<FilmCard />", () => {
  let card: JSX.Element;
  beforeEach(() => {
    card = (
      <FilmCard
        titulo="A new hope"
        director="george lucas"
        fecha_lanzamiento="02/03/01"
      />
    );
  });
  it("should render", () => {
    render(card);
  });

  it("should have an image", () => {
    const { getByTestId } = render(card);

    getByTestId("image");
  });

  it("should have title, director, & release_date texts", () => {
    const { getByTestId } = render(card);

    getByTestId("title");
    getByTestId("director");
    getByTestId("release_date");
  });

  it('should display titulo: "A new hope", director: "george lucas", fecha_lanzamiento: "02/03/1977"', () => {
    const { getByText } = render(card);

    getByText("A new hope");
    getByText("george lucas");
    getByText("02/03/01");
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
