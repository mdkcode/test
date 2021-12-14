import "./App.css";
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from "./Details";
import UserForm from "./UserForm";

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Switch>
        <Route component={UserForm} path="/" exact />
        <Route component={Details} path="/details"/>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
