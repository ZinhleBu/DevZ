import React from "react";
import { Parallax } from "react-parallax";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import data from "../utils/data";

import {

    handleHover,
    handleHoverExit

} from "../components/Animations";
import VideoPlayer from "../components/VideoPlayer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Home() {

    const imageDemo = "../thema-landing.jpg";
    const image2 = "../photography.jpg";
    const image3 = "../jag.jpg";

    return (
        <InView threshold={0.045}>
            {({ ref, inView }) => (
                <div className="container">
                    <div className="wrapper">
                        <motion.h5>
                            HI, I'm <b>Zinhle</b>, I'm a creative, frontend developer, and I make
                            clean, modern ,digital and design work
                            to new heights.


                        </motion.h5>
                        <h1>Projects</h1>
                        <div className="container-main">
                        <Link
                            to='/work'
                            >
                                
                                <Parallax bgImage={imageDemo} strength={200}>
                                <div style={{ height: 600, width: 1200 }}>
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
                                        }}>Website design, UX/UI </div>
                                </div>
                            </Parallax>
                        </Link>
                            

                        </div>

                        <div className="links">
                        <Link
                            to='/work'
                            style={{
                                color: "#000000",
                            }}>
                                
                            <p>
                                Projects
                            </p>
                        </Link>
                        </div>
                        <div className="cta">
                            <div className="cta-inner">
                                <h1>About</h1>
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
                            >Graphics</motion.h1>
                        </div>
                    </div>
                    <div className="video-sec">
                        <VideoPlayer />
                        <h1>Video Production</h1>
                        <h2>3D and 2D animation</h2>
                        <p>Some of my animation work ive done in the past year.</p>
                    </div>

                </div>
            )}
        </InView>
    );

}



export default Home;