import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact Us page test Cases", () => {
  it("Should Load the contact us Page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should Load the Button inside Contact Page", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });
});
