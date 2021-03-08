import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store/store";
import { MemoryRouter } from "react-router-dom";

const Wrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
