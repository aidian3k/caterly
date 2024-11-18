import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

test("renders app logo", () => {
  render(<Navigation />, { wrapper: BrowserRouter });
  const titleElem = screen.getByText("Caterly");
  expect(titleElem).toBeInTheDocument();
});
