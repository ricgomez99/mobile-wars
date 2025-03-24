import { render } from "@testing-library/react-native";
import HomeScreen from "@/app/(tabs)";

describe("<HomeScreen />", () => {
  it('should render properly & display "Hello World!" text', () => {
    const { getByText } = render(<HomeScreen />);

    getByText("Hello World!");
  });
});
