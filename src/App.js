import React from "react";
import "./App.scss";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

import { Footer } from "./components/Footer";
import Lottie from "lottie-react";
import loadAnimation from "./utils/load.json";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Router>
        <div className="App">
          <motion.div 
          initial= {{ display: 1, zIndex: 20 }}
          animate= {{ opacity: 0, zIndex: -1 }} 
          transition= {{ delay: 1.5, duration: .1}}
          className="loader-container">
            <div className="loader-wrapper">
              <Lottie
                width={100}
                height={100}
                loop={true}
                autoplay={true}
                className="lottie"
                animationData={loadAnimation} />
            </div>
          </motion.div>
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
          <Footer />
        </div>
      </Router>
    </AnimatePresence>
  );
}

export default App;
