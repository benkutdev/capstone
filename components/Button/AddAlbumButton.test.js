import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddAlbumButton from "./AddAlbumButton";

describe("AddAlbumButton", () => {
  it("renders the AddAlbumButton component", () => {
    render(<AddAlbumButton />);
    const addAlbumButton = screen.getByRole("button");
    expect(addAlbumButton).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    const onClick = jest.fn();
    render(<AddAlbumButton onClick={onClick} />);
    const addAlbumButton = screen.getByRole("button");
    fireEvent.click(addAlbumButton);
    expect(onClick).toHaveBeenCalled();
  });
});
