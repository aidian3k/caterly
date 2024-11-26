import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders navigation links", () => {
  render(<App />);
  const dashboardLinkElement = screen.getByText(/Dashboard/i);
  const offerLinkElement = screen.getByText(/Dashboard/i);

  expect(dashboardLinkElement).toBeInTheDocument();
  expect(offerLinkElement).toBeInTheDocument();
});
