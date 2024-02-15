import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "../components/Counter/Counter";

describe("Counter", () => {
  it("should render correctly", () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    expect(incrementButton).toBeInTheDocument();
  });
  it("should render count of 0", () => {
    render(<Counter />);
    const counter = screen.getByRole("heading");
    expect(counter).toHaveTextContent("0");
  });

  it("should increment count by 2 on user double clicking increment", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });
    await user.dblClick(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  it("should render to count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    // await user.clear(amountInput);
    
    const setButton = screen.getByRole("button", { name: /set/i });
    const countElement = screen.getByRole("heading");
    await user.click(setButton);
    expect(countElement).toHaveTextContent("10");
  });

  it("should focuse element in right order", async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: /set/i });
    const incrementButton = screen.getByRole("button", { name: /increment/i });

    await user.tab();
    expect(incrementButton).toHaveFocus();

    await user.tab();
    expect(amountInput).toHaveFocus();

    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
