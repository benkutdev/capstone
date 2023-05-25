import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PlusButton from "./PlusButton";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("PlusButton", () => {
  it("renders the PlusButton component", () => {
    render(<PlusButton />);
    const plusButton = screen.getByAltText("add-plus");
    expect(plusButton).toBeInTheDocument();
  });

  it("calls the onAdd function and navigates to the homepage when clicked", () => {
    const onAddMock = jest.fn();
    const pushMock = jest.fn();

    useRouter.mockReturnValue({ push: pushMock });

    const album = {};

    render(<PlusButton onAdd={onAddMock} album={album} />);
    const plusButton = screen.getByAltText("add-plus");
    fireEvent.click(plusButton);

    expect(onAddMock).toHaveBeenCalledWith(album);
    expect(pushMock).toHaveBeenCalledWith("/");
  });
});
