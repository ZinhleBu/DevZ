import React from 'react'
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Jag = () => {

  const jag = "../../images/jag.webp";

  return (

    <div className="project-hero">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: .4, duration: .4 }}
        className="container">
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: .4, duration: .4 }}
        >Friends of JAG</motion.h1>
        <Parallax className="art-img" style={{ borderRadius: "18px" }} bgImage={jag} strength={100}>
          <div className="art-inner" style={{ height: 500, width: 800 }}>
            <div></div>
          </div>
        </Parallax>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: .4, duration: .4 }} className="project-section">
          <div>
            <h2>Project details</h2>
            <p>Created by: Zinhle Buhlungu</p>
            <p>Year: 2021</p>
            <p>Company: Johannesburg Art Gallery</p>
            <Link
              to='/thema'
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
              I created this website design as an upgrade to their current website.
            </p>
            <h2>Tools used</h2>
            <span>AdobeXD</span>
            <span>Nextjs</span>
            <span>Framer Motion</span>
            <span>Pexels images</span>
            <Link
              to='/thema'
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

export default Jag