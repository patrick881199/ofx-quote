import React from "react";
import GlobalStyled from "./components/GlobalStyles";
import QuotePage from "./pages/QuotePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <Router>
        <Switch>
          {/* either paths gonna go to the same quote form page */}
          {/* it's just the quote detial is showing or not */}
          <Route path={["/quote", "/"]}>
            <QuotePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
