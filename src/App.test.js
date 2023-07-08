import { render, screen } from "@testing-library/react";
import App from "./App";

test("home page", () => {
  render(<App />);
  const linkElement = screen.getByText(/Little Lemon 30% off/i);
  expect(linkElement).toBeInTheDocument();
});
