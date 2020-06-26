import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/views/HomePage";
import Dashboard from "./components/views/Dashboard";

function App() {
  return (
    <div className="App">
      Pawtners
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
