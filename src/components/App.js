import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
