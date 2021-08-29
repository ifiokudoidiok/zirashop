import React from "react";
import { connect } from "react-redux";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./components/NavBar.css";
import "./App.css";
import Fave from "./components/Fave";

function App(props: any) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([] as Array<any>[]);
  const handleChange = (event: any) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };


  return (
    <BrowserRouter>
      <div className="App">
        <NavBar
          className="navbar"
          component={NavBar}
          handleChange={handleChange}
          searchTerm={searchTerm}
        />
        <Switch>
          <Route exact path="/">
            <Home searchResults={searchResults} searchTerm={searchTerm} setSearchResults={setSearchResults}/>
          </Route>
          <Route exact path="/favorite">
            <Fave searchResults={searchResults} searchTerm={searchTerm} setSearchResults={setSearchResults}/>
          </Route>
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state: any) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(App);
