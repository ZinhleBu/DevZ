import React from 'react'
import Projects from '../components/Projects/Projects'
import VideoPlayer from "../components/VideoPlayer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";


import {

    handleHover,
    handleHoverExit

} from "../components/Animations";
function Work() {
    const art1 = "../../images/art.png";
    const art2 = "../../images/art2.JPG";
    const art3 = "../../images/art3.jpg";

    const genKey = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      }
      console.log(genKey);
    

    return (
        <motion.div
        key={genKey()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: .2, duration: .2 }}
        >
            <Projects />
            <div className="video-sec">
                <h1>Video & Animation</h1>
                <h2>3D and 2D animation</h2>
                <p>Some of my animation work I've done in the past few year.</p>
                <VideoPlayer />
                <div className="links">
                    <Link
                        to='/video'
                        style={{
                            color: "#000000",
                        }}>
                        <p>
                            See more
                        </p>
                    </Link>
                </div>
            </div>
            <div className="illustration">
                <motion.h1
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.8, delay: .4 }}
                    style={{ position: "relative", fontSize: "4rem" }}
                    onMouseEnter={e => handleHover(e)}
                    onMouseOut={e => handleHoverExit(e)}
                >Illustration</motion.h1>
                <div className="artSec">
                    <Parallax className="art-img" bgImage={art3} strength={100}>
                        <div className="art-inner" style={{ height: 400, width: 200, borderRadius: "18px" }}>
                            <div></div>
                        </div>
                    </Parallax>
                    <span style={{ width: "20px" }}></span>
                    <Parallax className="art-img" bgImage={art1} strength={100}>
                        <div className="art-inner" style={{ height: 400, width: 500, borderRadius: "18px" }}>
                            <div></div>
                        </div>
                    </Parallax>
                    <span style={{ width: "20px" }}></span>

                    <Parallax className="art-img" bgImage={art2} strength={100}>
                        <div className="art-inner" style={{ height: 400, width: 600, borderRadius: "18px" }}>
                            <div></div>
                        </div>
                    </Parallax>
                </div>
                <div className="links">
                    <Link
                        to='/illustrations'
                        style={{
                            color: "#000000",
                        }}>
                        <p>
                            See more
                        </p>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default Work
