import { render, screen } from "@testing-library/react";
import Skills from "../components/skills/Skills";

describe("Skills", () => {
  const skills: string[] = ["HTML", "CSS", "JavaScript"];
  it("should render a list", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });
});
