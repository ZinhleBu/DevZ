import React from 'react'
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Fundi = () => {
  const fundi = "../../fundi-landing.webp";

  return (
    <>
      <Helmet>
        <title>Projects - Fundi Foundation</title>
        <meta name="description" content=" I built and designed this website for the Fundi Foundation. They hold multiple charities for school kids who want to enable their education. The foundation needed a site that can represent their brand and convey their message clearly. I decided to create the site using Next.js as this would allow me to create the complicated compenents needed to create the site. I worked with talented graphic designer and creative team to deliver the website. my role was basic layout and design as well as development." />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content="Fundi Foundation, Projects, Web Design, UX, UI, Design, Adobe XD, Coding" />
        <meta name="author" content="Zinhle Buhlungu" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://www.zinhle.dev/fundi"
          key="canonical"
        />

      </Helmet>
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
          >Fundi Foundation</motion.h1>
          <Link

            to={{ pathname: "https://www.fundifoundation.org" }} target="_blank"
          >

            <Parallax className="art-img" style={{ borderRadius: "18px" }} bgImage={fundi} strength={100}>
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
              <h2>Tools used</h2>
              <p>- AdobeXD</p>
              <p>- Nextjs</p>
              <p>- Framer Motion</p>
              <p>-Pexels images</p>
              <Link
                to={{ pathname: "https://github.com/ZinhleBu/fundi-foundation-dev" }} target="_blank"

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
                I built and designed this website for the Fundi Foundation. They hold multiple charities for school kids who want to enable their education. The foundation needed a site that can represent their brand and convey their message clearly. I decided to create the site using Next.js as this would allow me to create the complicated compenents needed to create the site. I worked with talented graphic designer and creative team to deliver the website. my role was basic layout and design as well as development.</p>

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
    </>
  )
}

export default Fundi