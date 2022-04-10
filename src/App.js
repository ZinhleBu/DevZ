import React, { Fragment } from "react";
import "./App.scss";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./components/Footer";

// const Footer = React.lazy(() => import("./components/Footer"));

// import Lottie from "lottie-react";
// import loadAnimation from "./utils/load.json";

const About = React.lazy(() => import("./pages/About"));
const Home = React.lazy(() => import("./pages/Home"));
const Work = React.lazy(() => import("./pages/Work"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Illustrations = React.lazy(() => import("./pages/ProductPages/Illustrations"));
const Jag = React.lazy(() => import("./pages/ProductPages/Jag"));
const Thema = React.lazy(() => import("./pages/ProductPages/Thema"));
const Fundi = React.lazy(() => import("./pages/ProductPages/Fundi"));
const Gryphon = React.lazy(() => import("./pages/ProductPages/Gryphon"));
const Imbeu = React.lazy(() => import("./pages/ProductPages/Imbeu"));
const NoahCap = React.lazy(() => import("./pages/ProductPages/NoahCap"));
const Vati = React.lazy(() => import("./pages/ProductPages/Vati"));
const Iwesizwe = React.lazy(() => import("./pages/ProductPages/Iwesizwe"));
const Hooks = React.lazy(() => import("./pages/ProductPages/Hooks"));
const VideoPage = React.lazy(() => import("./pages/ProductPages/VideoPage"));
const ScrollToTop = React.lazy(() => import("./ScrollToTop"));

const Header = React.lazy(() => import("./components/Header"));

function App() {

  const genKey = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  console.log(genKey);

  return (
    <Fragment>
      <AnimatePresence exitBeforeEnter>
        <React.Suspense fallback={
          <div className="loader-container " >
            <div className="loader-loader-wrapper ">
              <p>
                ...
              </p>
            </div>
          </div>}>
          <Router>
            <motion.div
              key={genKey()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: .4 } }}
              exit={{ opacity: 0, transition: { duration: .4 } }}
              className="App">
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
        </React.Suspense>

      </AnimatePresence>
    </Fragment>
  );
}

export default App;
