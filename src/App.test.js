import React from "react";
import axios from "axios";
import userEvent from "@testing-library/user-event";

import { render, screen, waitForElementToBeRemoved } from "./custom-render";

import App from "./App";

describe("<App />", () => {
  it("Renders <App /> component correctly", async () => {
    render(<App />);
    expect(screen.getByText(/Quick Quote/i)).toBeInTheDocument();
  });

  //need to do a more complete funcational test as well as unit test
});
