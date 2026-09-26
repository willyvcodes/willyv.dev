import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the interactive particle field", () => {
  render(<App />);
  expect(screen.getByLabelText(/interactive particle field/i)).toBeInTheDocument();
});
