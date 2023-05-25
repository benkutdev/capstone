import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DeleteButton from "./DeleteButton";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("DeleteButton", () => {
  it("renders the DeleteButton component", () => {
    render(<DeleteButton />);
    const deleteButton = screen.getByAltText("delete-bin");
    expect(deleteButton).toBeInTheDocument();
  });

  it("calls the onDelete function when clicked", () => {
    const onDelete = jest.fn();
    render(<DeleteButton onDelete={onDelete} />);
    const deleteButton = screen.getByAltText("delete-bin");
    fireEvent.click(deleteButton);
    expect(onDelete).toHaveBeenCalled();
  });
});
