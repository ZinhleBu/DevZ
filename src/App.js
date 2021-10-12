import React, { useRef } from "react";
import "./App.scss";
import { Parallax } from "react-parallax";
import { InView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {

  handleHover,
  handleHoverExit

} from "./components/Animations";
import VideoPlayer from "./components/VideoPlayer";


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
                  <Route exact path="/opportunities" component={Opportunities} />
                  <Route exact path="/solutions" component={Solutions} />
                  <Route exact path="/contact-us" component={Contact} />
                </Switch>

              </div>
            </div>
          </div>
        </div>
      </Router>
    </AnimatePresence>
  );
}

function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

function Home() {

  const imageDemo = "../thema-landing.jpg";
  const image2 = "../photography.jpg";
  const image3 = "../2385.jpg";
 
  return (
    <InView threshold={0.045}>
      {({ ref, inView }) => (
        <div className="container">
          <div className="wrapper">
            <motion.h5>
              The <b>JOBURG</b>, is a creative, engineer driven, global agency
              working on advancing the software, advertising and design communities
              to new heights.
              <h1>Projects</h1>

            </motion.h5>

            <div className="container-main">
              <Parallax bgImage={imageDemo} strength={200}>
                <div style={{ height: 400, width: 1200 }}>
                  <div className="container-title"
                    style={{
                      fontSize: "34px",
                      fontWeight: "bold",
                      color: "white",
                      width: 300,
                      position: " absolute",
                      top: "20%",
                      left: "70%",
                    }}>Clean, Minimal Design for Web </div>
                </div>
              </Parallax>
            </div>
            <div className="cta">
              <div className="cta-inner">
                <h1
                
                >About</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias eos beatae quos, aut quo similique molestiae facere expedita excepturi nulla!
                </p>
              </div>
              <Parallax className="cta-img" bgImage={image2} strength={100}>
                <div className="img-inner" style={{ height: 400, width: 500 }}>
                  <div></div>
                </div>
              </Parallax>
            </div>
            <div className="mock">
              <Parallax bgImage={image3} strength={200}
                style={{
                  position: " relative",
                  borderRadius: "18px"
                }}
              >
                <div
                  style={{ height: 600, width: 300, borderRadius: "18px" }}>
                  <div > </div>
                </div>
              </Parallax>
            </div>

          </div>

          <div className="typo">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, width: 0 }}
              animate={inView ? { opacity: 1, width: "60%" } : { opacity: 0, width: 0 }}
              transition={{ duration: 0.8, delay: .4 }}
              style={{ position: "relative" }}
              className="red-background">

            </motion.div>
            <motion.h1
              initial={{ opacity: 0, scale: 1.1 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8, delay: .4 }}
              style={{ position: "relative" }}
              onMouseEnter={e => handleHover(e)}
              onMouseOut={e => handleHoverExit(e)}
            >Motion</motion.h1>
            <div>
              <motion.h1
                initial={{ opacity: 0, scale: 1.1 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8, delay: .6 }}
                style={{ position: "relative" }}
                onMouseEnter={e => handleHover(e)}
                onMouseOut={e => handleHoverExit(e)}
              >DESIGN</motion.h1>
            </div>
          </div>
          <div className="video-sec">
          <VideoPlayer/>
          <h1>Video Production</h1>
          </div>

        </div>
      )}
    </InView>
  );

}
export default App;
