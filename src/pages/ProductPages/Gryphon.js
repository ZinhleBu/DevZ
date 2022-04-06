import React from 'react'
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Gryphon = () => {
  const gryphon = "../../gryphon-landing.webp";

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
        >The Gryphon Lounge Website</motion.h1>
        <Link

          to={{ pathname: "https://www.thegryphonlounge.co.za" }} target="_blank"
        >

          <Parallax className="art-img" style={{ borderRadius: "18px" }} bgImage={gryphon} strength={100}>
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
            <p>Company: The Gryphone lounge </p>
            <h2>Tools used</h2>
            <p>- Wordpress</p>
            <p>- PhP</p>
            <p>- Theme Forest</p>
            <p>- Envato</p>
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
            </Link>
          </div>
          <div className="project-details">
            <h2>Purpose of the project</h2>
            <p>
              Designed for a brand and digital agency I currently work at, this website is a custom Wordpress site I designed to showcase the agencies work and enhance their digital presence.<br/>Since launching the site, I have managed to create an average click through rate of 22,4% on average and over 300 impressions. <br/> Making use of wordpress and a theme from Themeforrest , allowing me to create custome page layouts for each page as well as providing a powerfull back-end to manage all conent on the website. </p>
           
            <Link
              to='/noah'
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

export default Gryphon