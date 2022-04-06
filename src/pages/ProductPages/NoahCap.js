import React from 'react'
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const NoahCap = () => {
  const noahCap = "../../../images/noah-landing.webp";

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
        >Noah Capital Markets</motion.h1>
        <Link

          to={{ pathname: "https://www.noahcap.com" }} target="_blank"
        >

          <Parallax className="art-img" style={{ borderRadius: "18px" }} bgImage={noahCap} strength={100}>
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
            <p>Year: 2020</p>
            <p>Company: Noah Capital Markets </p>
          </div>
          <div className="project-details">
            <h2>Purpose of the project</h2>
            <p>
            Created a website for Noah Capital Markets.               </p>
            <h2>Tools used</h2>
            <p>- Wordpress</p>
            <p>- PhP</p>
            <p>- Theme Forest</p>
            <p>- Envato</p>
            <Link
              to='/hooks'
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

export default NoahCap