import { logRoles, render, screen } from "@testing-library/react";
import Skills from "../components/skills/Skills";

describe("Skills", () => {
  const skills: string[] = ["HTML", "CSS", "JavaScript"];
  it("should render correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  it("should render a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(skills.length);
  });

  it("should render login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: /login/i,
    });
    expect(loginButton).toBeInTheDocument();
  });

  it("should not render Start learning button", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: /start learning/i,
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  it("should display learning button eventually", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);

    // screen.debug();
    const learningButton = await screen.findByRole(
      "button",
      {
        name: /start learnings/i,
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug();
    expect(learningButton).toBeInTheDocument();
  });
});
