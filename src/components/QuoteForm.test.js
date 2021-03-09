import React from "react";
import { render, screen } from "../custom-render";
import QuoteForm from "./QuoteForm";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { getQuoteUrl } from "../api";

jest.mock("axios");
describe("<QuoteForm />", () => {
  it("Renders <QuoteForm /> component", () => {
    render(<QuoteForm />);
    expect(screen.getByText("Quick Quote")).toBeInTheDocument();
  });

  it("Input OnChange", () => {
    render(<QuoteForm />);

    userEvent.type(screen.getByLabelText("First Name"), "John");
    // userEvent.type(screen.getByLabelText("Last Name"), 'Denver')
    // userEvent.type(screen.getByLabelText("Email"), 'JohnDever@gmail.com')
    // userEvent.type(screen.getByLabelText("Telephone/Mobile"), '0499182035')
    // userEvent.type(screen.getByLabelText("Amount"), '100000')
    expect(screen.getByLabelText("First Name")).toHaveValue("John");
  });

  it("Invalid phonenumber", () => {
    render(<QuoteForm />);

    userEvent.type(screen.getByLabelText("First Name"), "John");
    userEvent.type(screen.getByLabelText("Last Name"), "Denver");
    userEvent.type(screen.getByLabelText("Email"), "JohnDever@gmail.com");
    userEvent.type(screen.getByLabelText("Telephone / Mobile"), "abcdefg");
    userEvent.type(screen.getByLabelText("Amount"), "100000");

    userEvent.click(screen.getByText(/GET QUOTE/i));
    expect(screen.getByText("Invalid phone number")).toBeInTheDocument();
  });

  it("Call api when button clicked", () => {
    render(<QuoteForm />);

    userEvent.type(screen.getByLabelText("First Name"), "John");
    userEvent.type(screen.getByLabelText("Last Name"), "Denver");
    userEvent.type(screen.getByLabelText("Email"), "JohnDever@gmail.com");
    userEvent.type(screen.getByLabelText("Telephone / Mobile"), "0439856421");
    userEvent.type(screen.getByLabelText("Amount"), "100000");

    userEvent.click(screen.getByText(/GET QUOTE/i));

    axios.get.mockImplementationOnce(() => Promise.resolve("data"));
    expect(axios.get).toHaveBeenCalledWith(
      getQuoteUrl("AUD", "USD", "100000.00")
    );
  });
  //
});
