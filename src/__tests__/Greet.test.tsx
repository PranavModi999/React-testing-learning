import { render, screen } from "@testing-library/react";
import { Greet } from "../components/greet/Greet";

describe("Greet", () => {
  it("should renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
  });

  it("should renders with a name", () => {
    const name = "Pranav";
    render(<Greet name={name} />);
    const textElement = screen.getByText(`Hello ${name}`);
    expect(textElement).toBeInTheDocument();
  });
});
