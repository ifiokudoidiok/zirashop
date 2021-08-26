import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from './components/Home';
import Cart from './components/Cart';
import "./App.css";
import Fave from "./components/Fave";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/favorite" component={Fave} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App; 
