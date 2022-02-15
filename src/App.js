import React, { Fragment } from "react";
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
import Illustrations from "./pages/ProductPages/Illustrations";
import Jag from "./pages/ProductPages/Jag";
import Thema from "./pages/ProductPages/Thema";
import Fundi from "./pages/ProductPages/Fundi";
import Gryphon from "./pages/ProductPages/Gryphon";
import Imbeu from "./pages/ProductPages/Imbeu";
import NoahCap from "./pages/ProductPages/NoahCap";
import Vati from "./pages/ProductPages/Vati";
import Iwesizwe from "./pages/ProductPages/Iwesizwe";
import Hooks from "./pages/ProductPages/Hooks";
import VideoPage from "./pages/ProductPages/VideoPage";
import ScrollToTop from "./ScrollToTop";

function App() {

  const genKey = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  console.log(genKey);

  return (
    <Fragment>
    <AnimatePresence exitBeforeEnter>
      <Router>
        <motion.div 
        key={genKey()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: .4}}}
        exit={{ opacity: 0, transition: { duration: .4} }}
        className="App">
          <motion.div
            key={genKey()}
            initial={{ display: 1, zIndex: 20 }}
            animate={{ opacity: 0, zIndex: -1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.5, duration: .4 }}
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
                <ScrollToTop>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/work" component={Work} />
                  <Route exact path="/contact-me" component={Contact} />
                  <Route exact path="/illustrations" component={Illustrations} />
                  <Route exact path="/jag" component={Jag} />
                  <Route exact path="/thema" component={Thema} />
                  <Route exact path="/fundi" component={Fundi} />
                  <Route exact path="/gryphon" component={Gryphon} />
                  <Route exact path="/imbeu" component={Imbeu} />
                  <Route exact path="/noah" component={NoahCap} />
                  <Route exact path="/vati" component={Vati} />
                  <Route exact path="/iwesizwe" component={Iwesizwe} />
                  <Route exact path="/hooks" component={Hooks} />
                  <Route exact path="/videopage" component={VideoPage} />
                  </ScrollToTop>
                </Switch>
              </div>
            </div>
          </div>
          <Footer />
        </motion.div>
      </Router>
    </AnimatePresence>
    </Fragment>
  );
}

export default App;
