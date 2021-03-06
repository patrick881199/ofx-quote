import GlobalStyled from "./components/GlobalStyles";
import QuotePage from "./pages/QuotePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <Router>
        <Switch>
          <Route path="/">
            <QuotePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
