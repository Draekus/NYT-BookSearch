import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Books from "./pages/Books";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Books} />
              <Route exact path="/books" component={Books} />
              {/* <Route exact path="/books/:id" component={Detail} /> */}
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
