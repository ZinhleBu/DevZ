import React from "react";
import "./App.scss";
import { AnimatePresence } from "framer-motion";
import { NextSeo } from 'next-seo';
import Head from 'next/head';
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
          <Head />
          <NextSeo
            title="Zinhle Portfolio"
            description="
             HI, I'm <b>Zinhle</b>, I'm a creative, frontend developer, and I make
            clean, modern custom websites. My skills also include Motion graphics and animation."
            canonical="https://www.zinhle.dev/"
            additionalMetaTags="google-site-verification" 
            openGraph={{
              url: 'https://www.zinhle.dev/',
              title: 'Zinhle Portfolio Site',
              description: 'I make clean, modern custom website designs.',
              images: [
                {
                  url: 'https://www.zinhle.dev/thema-agency.jpg',
                  width: 800,
                  height: 600,
                  alt: 'Thema Agency',
                  type: 'image/jpeg',
                },
                {
                  url: 'https://www.zinhle.dev/thema-agency.jpg/jag.jpg',
                  width: 900,
                  height: 800,
                  alt: 'Johannesburg Art Gallery',
                  type: 'image/jpeg',
                },
                { url: 'https://www.zinhle.dev/2583.jpg' },
              ],
              site_name: 'DevZ',
            }}
            twitter={{
              handle: '@ZinhleBuhlungu',
              site: '@ZinhleBuhlungu',
              cardType: 'summary_large_image',
            }}
          />
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
