import React from 'react';
// import Project from './Project/Project';
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import { Link, } from 'react-router-dom'
import projects from "../../utils/data";

const Projects = () => {

    const arrowRight = "../../../icons/right-arrow.png";
    const genKey = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    console.log(genKey);


    return (
        <main>
            <div className="container">
                {projects.map((project) => (
                    <div item="true" key={genKey()}
                    >
                        <div className="project-hero">
                            <div className="container">
                                <motion.h1
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: .4, duration: .4 }}
                                    style={{
                                        marginBottom: "4rem"
                                    }}
                                >{project.name}</motion.h1>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: .5, duration: .4 }}
                                >Category: {project.category}</motion.p>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: .5, duration: .4 }}
                                >Brand: {project.brand}</motion.p>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: .5, duration: .4 }}
                                >Description: {project.description}</motion.p>
                                <Link
                                    className="links"
                                    to={project.url}
                                >
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ delay: .5, duration: .4 }}
                                    >Go to {project.name}
                                        <img className="icon" style={{ maxWidth: "30px", margin: "0 auto", top: "10px", left: "10px", position: "relative" }} src={arrowRight} alt="r" />
                                    </motion.p>
                                </Link>
                                <div>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: .6, duration: .4 }}
                                >
                                    <Parallax bgImage={project.image} strength={200} style={{ borderRadius: "18px" }}>
                                        <motion.div style={{ height: 600, width: 1200 }}>
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
                                        </motion.div>
                                    </Parallax>
                                </motion.div>
                            </div>
                        </div>

                    </div>
                ))}


            </div>
        </main>
    );
}

export default Projects;
