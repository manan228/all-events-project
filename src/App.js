import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import CreateEvent from "./CreateEvent";
import Events from "./Events";

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Events />
        </Route>
        <Route path="/createevent" exact>
          <CreateEvent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
