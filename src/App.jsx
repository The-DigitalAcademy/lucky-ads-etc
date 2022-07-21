import React from "react";
import {Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
          <Route exact path="/">
            
          </Route>
        </Switch>
    </>
  );
}

export default App;
