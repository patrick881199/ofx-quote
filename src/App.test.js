import React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen, waitForElementToBeRemoved } from "./custom-render";

import App from "./App";

describe("<App />", () => {
  it("Renders <App />, show input form", async () => {
    render(<App />);
    expect(screen.getByText(/Quick Quote/i)).toBeInTheDocument();
  });

  it("show QuoteDetail infomation when button clicked", async () => {
    render(<App />);

    userEvent.type(screen.getByLabelText("First Name"), "John");
    userEvent.type(screen.getByLabelText("Last Name"), "Denver");
    userEvent.type(screen.getByLabelText("Email"), "JohnDever@gmail.com");
    userEvent.type(screen.getByLabelText("Telephone / Mobile"), "0439856421");
    userEvent.type(screen.getByLabelText("Amount"), "100000");

    userEvent.click(screen.getByText(/GET QUOTE/i));
    await screen.findByText("Term currency is currently not supported");
  });
});
