import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "../App";
test("renders header and navigates", async () => {
  render(<App />);
  expect(screen.getByText("Base44 UI")).toBeInTheDocument();
  await userEvent.click(screen.getByRole("button", { name: "UI Kit Demo" }));
  expect(await screen.findByText("UI Kit Demo")).toBeInTheDocument();
});
