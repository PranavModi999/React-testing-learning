import { MuiMode } from "../components/mui/MuiMode";
import { render, screen } from "../test-utils";

describe("MuiMode", () => {
  it("should render correctly", () => {
    render(<MuiMode />);
    const headElement = screen.getByRole("heading");
    expect(headElement).toHaveTextContent("dark mode");
  });
});
