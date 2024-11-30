import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavigationLink from "./NavigationLink";

test("renders nav link", () => {
  render(<NavigationLink label="Test" path="/test" />, {
    wrapper: BrowserRouter,
  });
  const titleElem = screen.getByText("Test");
  expect(titleElem).toBeInTheDocument();
});
