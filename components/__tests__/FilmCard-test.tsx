import { render } from "@testing-library/react-native";
import FilmCard from "../cards/FilmCard/FilmCard";

describe("<FilmCard />", () => {
  it("should render", () => {
    render(<FilmCard titulo="" director="" fecha_lanzamiento="" />);
  });

  it("should have an image", () => {
    const { getByTestId } = render(
      <FilmCard titulo="" director="" fecha_lanzamiento="" />
    );

    getByTestId("image");
  });

  it("should have title, director, & release_date texts", () => {
    const { getByTestId } = render(
      <FilmCard titulo="" director="" fecha_lanzamiento="" />
    );

    getByTestId("title");
    getByTestId("director");
    getByTestId("release_date");
  });

  it('should display titulo: "A new hope", director: "george lucas", fecha_lanzamiento: "02/03/1977"', () => {
    const { getByText } = render(
      <FilmCard
        titulo="A new hope"
        director="george lucas"
        fecha_lanzamiento="02/03/1977"
      />
    );

    getByText("A new hope");
    getByText("george lucas");
    getByText("02/03/1977");
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
