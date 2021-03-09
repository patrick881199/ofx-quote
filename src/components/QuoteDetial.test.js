import React from "react";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import QuoteDetail from "./QuoteDetail";
import userEvent from "@testing-library/user-event";
const mockStore = configureStore([]);

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("<QuoteDetail />", () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      quoteInfo: {
        CustomerRate: "4.0",
        CustomerAmount: "40000.00",
        toCurrency: "CNY",
        fromCurrency: "AUD",
        amount: "10000.00",
      },
    });

    component = render(
      <Provider store={store}>
        <QuoteDetail />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    {
      component;
    }
    expect(screen.getByText("OFX Customer Rate")).toBeInTheDocument();
    expect(screen.getByText("4.0")).toBeInTheDocument();
    expect(screen.getByText("AUD")).toBeInTheDocument();
    expect(screen.getByText("10000.00")).toBeInTheDocument();
    expect(screen.getByText("CNY")).toBeInTheDocument();
    expect(screen.getByText("40000.00")).toBeInTheDocument();
  });

  it("should history.push('/') when click shadow area", () => {
    {
      component;
    }
    userEvent.click(screen.getByTestId("Shadow"));
    expect(mockHistoryPush).toBeCalledWith("/");
  });
});
