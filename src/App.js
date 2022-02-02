import React from "react";
import "./App.scss";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <div className="wrapper">
              <div className="home">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/work" component={Work} />
                  <Route exact path="/contact-me" component={Contact} />
                </Switch>

              </div>
            </div>
          </div>
        </div>
      </Router>
    </AnimatePresence>
  );
}

export default App;
