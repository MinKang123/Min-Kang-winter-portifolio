import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button Component", () => {
  it("renders button with children text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders as a link when href is provided", () => {
    render(<Button href="https://github.com">GitHub</Button>);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://github.com");
    expect(screen.getByText("GitHub")).toBeInTheDocument();
  });

  it("renders as a button when href is not provided", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("BUTTON");
  });

  it("calls handleClick when button is clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button handleClick={handleClick}>Click me</Button>);

    await user.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it("applies disabled styles when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("applies custom color styles", () => {
    render(<Button color="white">White Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-gray-50");
  });

  it("applies custom classes via customClasses prop", () => {
    render(<Button customClasses="custom-class">Custom</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("does not trigger click handler when disabled", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Button disabled handleClick={handleClick}>
        Disabled
      </Button>,
    );

    await user.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
