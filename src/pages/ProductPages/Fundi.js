import React from 'react'
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Fundi = () => {
  const thema = "../../fundi-landing.png";

  return (

    <div className="project-hero">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: .4, duration: .4 }}
        className="container">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: .4, duration: .4 }}
        >Fundi Foundation</motion.h1>
        <Link
        
        to={{ pathname: "https://www.fundifoundation.org" }} target="_blank"
        >
        
        <Parallax className="art-img" style={{ borderRadius: "18px" }} bgImage={thema} strength={100}>
          <div className="art-inner" style={{ height: 500, width: 800 }}>
            <div></div>
          </div>
        </Parallax>
        </Link>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: .4, duration: .4 }} 
          className="project-section">
          <div>
            <h2>Project details</h2>
            <p>Created by: Zinhle Buhlungu</p>
            <p>Year: 2021</p>
            <p>Company: Fundi </p>
            <Link
              to='/'
              style={{
                color: "#000000",
                textDecoration: "none",
              }}>
              <motion.p
                whileHover={{ color: "#e20001" }}
                className="links">
                Github
              </motion.p>
            </Link>          </div>
          <div className="project-details">
            <h2>Purpose of the project</h2>
            <p>
            I built and designed this website for the Fundi Foundation.             </p>
            <h2>Tools used</h2>
            <p>- AdobeXD</p>
            <p>- Nextjs</p>
            <p>- Framer Motion</p>
            <p>-Pexels images</p>
            <Link
              to='/gryphon'
              style={{
                color: "#000000",
                textDecoration: "none",

              }}>
              <p className="links">
                Next Project
              </p>
            </Link>
          </div>

        </motion.div>
      </motion.div>
    </div>
  )
}

export default Fundi