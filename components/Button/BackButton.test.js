import React from "react";
import { render, screen } from "@testing-library/react";
import BackButton from "./BackButton";

describe("BackButton", () => {
  it("renders the BackButton component", () => {
    render(<BackButton />);
    const backButton = screen.getByAltText("back-arrow");
    expect(backButton).toBeInTheDocument();
  });
});
