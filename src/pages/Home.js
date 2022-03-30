import React, { Fragment } from "react";
import { Parallax } from "react-parallax";
import { InView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import {

    handleHover,
    handleHoverExit

} from "../components/Animations";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Head from 'next/head'

function Home() {

    const imageDemo = "../thema-landing.jpg";
    const image2 = "../dark.jpg";
    const image3 = "../jag.jpg";
    const arrow = "../icons/arrow-pointer.png";
    const edit = "../icons/edit.png";
    const program = "../icons/programming.png";
    const stat = "../icons/strategy1.png";
    const art1 = "../../images/art.png";
    const art2 = "../../images/art2.JPG";
    const art3 = "../../images/art3.jpg";


    const genKey = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    console.log(genKey);

    return (
        <Fragment>
            <Head>
                <title>Home</title>
                <meta name="description" content="HI, I'm <b>Zinhle</b>, I'm a creative, frontend developer, and I make clean, modern custom websites. My skills also include Motion graphics and animation." />
                <meta name="robots" content="index,follow" />
                <meta name="keywords" content="Web Developer, Design, Branding, Ux,UI,Coding, Landing Pages, Portfolio, Front-end " />
                <meta name="author" content="Zinhle Buhlungu" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    rel="canonical"
                    href="https://www.zinhle.dev"
                    key="canonical"
                />

            </Head>
            <AnimatePresence>
                <InView threshold={0.045}>
                    {({ ref, inView }) => (
                        <div >
                            <div className="top-hero">
                                <motion.h5
                                    key={genKey()}

                                    initial={{ opacity: 0, top: -10 }}
                                    animate={{ opacity: 1, top: 10 }}
                                    exit={{ opacity: 0, top: -10 }}
                                    transition={{ delay: .2, duration: .2 }}
                                >
                                    HI, I'm <b>Zinhle</b>, I'm a creative, frontend developer, and I make
                                    clean, modern custom websites. My skills also include Motion graphics and animation.
                                </motion.h5>
                                <motion.h1
                                    key={genKey()}
                                    initial={{ opacity: 0, top: -10 }}
                                    animate={{ opacity: 1, top: 10 }}
                                    exit={{ opacity: 0, top: -10 }}
                                    transition={{ delay: .4, duration: .2 }}
                                >Projects</motion.h1>
                            </div>
                            <motion.div
                                key={genKey()}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: .4, duration: .3 }}
                                className="container-main">
                                <Link
                                    to='/work'
                                >
                                    <Parallax bgImage={imageDemo} strength={200}>
                                        <div style={{ height: 500, width: 1600 }}>
                                            <div className="container-title"
                                                style={{
                                                    fontSize: "34px",
                                                    fontFamily: "Roboto",
                                                    fontWeight: "regular",
                                                    color: "white",
                                                    width: 300,
                                                    position: " absolute",
                                                    top: "20%",
                                                    left: "70%",
                                                }}></div>
                                        </div>
                                    </Parallax>
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: .4, duration: .3 }}
                                className="links">
                                <Link
                                    to='/work'
                                    style={{
                                        color: "#000000",
                                        textDecoration: "none"
                                    }}>

                                    <p>
                                        See more
                                    </p>
                                </Link>
                            </motion.div>
                            <div className="cta">
                                <div className="cta-inner">
                                    <motion.h1
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ delay: .4, duration: .3 }}
                                    >About</motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ delay: .4, duration: .3 }}
                                    >
                                        Im from Johannesburg South Africa and I've been designing for the web for the past 3 years.<br></br>
                                        If youre trying to get your product or service on the web, feel free to give me a call or email me.
                                    </motion.p>
                                </div>
                                <Parallax className="cta-img" bgImage={image2} strength={100}>
                                    <div className="img-inner" style={{ height: 400, width: 500 }}>
                                        <div></div>
                                    </div>
                                </Parallax>
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: .4, duration: .3 }}
                                className="typo">

                                <motion.h1
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
                                    transition={{ duration: 0.8, delay: .4 }}
                                    style={{ position: "relative" }}
                                    onMouseEnter={e => handleHover(e)}
                                    onMouseOut={e => handleHoverExit(e)}
                                >Web</motion.h1>
                                <div>
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
                                        transition={{ duration: 0.8, delay: .6 }}
                                        style={{ position: "relative" }}
                                        onMouseEnter={e => handleHover(e)}
                                        onMouseOut={e => handleHoverExit(e)}
                                    >Design</motion.h1>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: .4, duration: .3 }}
                                className="mock">
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
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: .4, duration: .3 }}
                                    className="links">
                                    <Link
                                        to='/jag'
                                        style={{
                                            color: "#000000",
                                            textDecoration: "none"
                                        }}>

                                        <p>
                                            See more
                                        </p>
                                    </Link>
                                </motion.div>
                            </motion.div>

                            <div className="skillSec">
                                <div className="skillWrapper">
                                    <div className="skillItem">
                                        <img className="icon" src={arrow} alt="" />
                                        <h3>Design</h3>
                                        <p>Designing layouts and user interfaces for web.</p>
                                    </div>
                                    <div className="skillItem">
                                        <img className="icon" src={edit} alt="" />
                                        <h3>Video Editing</h3>
                                        <p>Motion graphics, Video intos, logo animations and many more.</p>
                                    </div>
                                    <div className="skillItem">
                                        <img className="icon" src={program} alt="" />
                                        <h3>Coding</h3>
                                        <p>Custom website layouts, functionality and analytics to suit your business needs.</p>
                                    </div>
                                    <div className="skillItem">
                                        <img className="icon" src={stat} alt="" />
                                        <h3>Planning</h3>
                                        <p>Thorough planning of branding and marketing strategies.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="illustration">
                                <motion.h1
                                    initial={{ opacity: 0, scale: 1 }}
                                    animate={inView ? { opacity: 0, scale: 1.1 } : { opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: .4 }}
                                    style={{ position: "relative" }}
                                    onMouseEnter={e => handleHover(e)}
                                    onMouseOut={e => handleHoverExit(e)}
                                >Illustration</motion.h1>
                                <div className="artSec">
                                    <Parallax className="art-img" bgImage={art3} strength={100}>
                                        <div className="art-inner" style={{ height: 400, width: 400, borderRadius: "18px" }}>
                                            <div></div>
                                        </div>
                                    </Parallax>
                                    <span style={{ width: "20px" }}></span>
                                    <Parallax className="art-img" bgImage={art1} strength={100}>
                                        <div className="art-inner" style={{ height: 400, width: 400, borderRadius: "18px" }}>
                                            <div></div>
                                        </div>
                                    </Parallax>
                                    <span style={{ width: "20px" }}></span>

                                    <Parallax className="art-img" bgImage={art2} strength={100}>
                                        <div className="art-inner" style={{ height: 400, width: 400, borderRadius: "18px" }}>
                                            <div></div>
                                        </div>
                                    </Parallax>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: .4, duration: .3 }}
                                    className="links">
                                    <Link
                                        to='/illustrations'
                                        style={{
                                            color: "#000000",
                                            textDecoration: "none"
                                        }}>

                                        <p>
                                            See more
                                        </p>
                                    </Link>
                                </motion.div>
                            </div>
                            <div className="banner">
                                <motion.h1
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: .4, duration: .3 }}
                                >
                                    Have a project in mind?<br></br>Lets get to <Link style={{ color: "black" }} to="/contact-me"><b>work.</b></Link>
                                </motion.h1>
                            </div>
                        </div>
                    )}
                </InView>
            </AnimatePresence>
        </Fragment>
    );

}



export default Home;