import React from 'react'
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import {

  handleHover,
  handleHoverExit

} from "../../components/Animations";
import { Link } from 'react-router-dom';


const Illustrations = () => {

  const art1 = "../../images/art.png";
  const art2 = "../../images/art2.JPG";
  const art3 = "../../images/art3.jpg";
  const art4 = "../../images/gold.png";
  const art5 = "../../images/easle.png";
  const art6 = "../../images/kanye.png";
  const art7 = "../../images/zol.png";
  const art8 = "../../images/cole.png";
  const art9 = "../../images/golden.png";

  return (

    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, delay: .4 }}
    className="illustrations-wrapper">
      <Link
        to='/work'
        style={{
          color: "#000000",
          textDecoration: "none",
        }}>
        <motion.p
          whileHover={{ color: "#e20001" }}
          className="links">
          Back to projects
        </motion.p>
      </Link>
      <motion.h1
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: .4 }}
        style={{ position: "relative", fontSize: "2rem" }}
        onMouseEnter={e => handleHover(e)}
        onMouseOut={e => handleHoverExit(e)}
      >Illustration</motion.h1>
      <div className="illustration">
        <div className="artSec">
          <Parallax className="art-img" bgImage={art3} strength={100}>
            <div className="art-inner" style={{ height: 400, width: 300, borderRadius: "18px" }}>
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
      </div>
      <div className="illustration">
        <div className="artSec">
          <Parallax className="art-img" bgImage={art4} strength={100}>
            <div className="art-inner" style={{ height: 400, width: 400, borderRadius: "18px" }}>
              <div></div>
            </div>
          </Parallax>
          <span style={{ width: "20px" }}></span>
          <Parallax className="art-img" bgImage={art5} strength={100}>
            <div className="art-inner" style={{ height: 400, width: 400, borderRadius: "18px" }}>
              <div></div>
            </div>
          </Parallax>
          <span style={{ width: "20px" }}></span>
          <Parallax className="art-img" bgImage={art6} strength={100}>
            <div className="art-inner" style={{ height: 400, width: 400, borderRadius: "18px" }}>
              <div></div>
            </div>
          </Parallax>
        </div>
      </div>
      <div className="illustration">
        <div className="artSec">
          <Parallax className="art-img" bgImage={art7} strength={100}>
            <div className="art-inner" style={{ height: 400, width: 400, borderRadius: "18px" }}>
              <div></div>
            </div>
          </Parallax>
          <span style={{ width: "20px" }}></span>
          <Parallax className="art-img" bgImage={art8} strength={100}>
            <div className="art-inner" style={{ height: 400, width: 400, borderRadius: "18px" }}>
              <div></div>
            </div>
          </Parallax>
          <span style={{ width: "20px" }}></span>
          <Parallax className="art-img" bgImage={art9} strength={100}>
            <div className="art-inner" style={{ height: 400, width: 400, borderRadius: "18px" }}>
              <div></div>
            </div>
          </Parallax>
        </div>
        <Link
          to={{ pathname: "https://www.instagram.com/_dintle/" }} target="_blank"
          style={{
            color: "#000000",
            textDecoration: "none",
          }}>
          <motion.p
            whileHover={{ color: "#e20001" }}
            className="links"
            style={{
              position: "relative"
              , textAlign: "center", marginTop: "50px"
            }}>
            - View on Instagram
          </motion.p>
        </Link>
      </div>
    </motion.div>
  )
}

export default Illustrations;