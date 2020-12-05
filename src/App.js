
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";

const App = () =>
  <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  </Router>

export default App;
