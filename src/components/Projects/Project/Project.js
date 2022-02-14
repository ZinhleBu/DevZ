import React from 'react'
import { Parallax } from "react-parallax";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function Project({ project }) {

    const arrowRight = "../../../../icons/right-arrow.png";


    return (
        <AnimatePresence exitBeforeEnter>

                <div className="project-hero">
                    <div className="container">

                        {/* <h1>{props.match.params.id}</h1> */}

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
                            to={`/project/${project.id}`}
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
        </AnimatePresence>

    )
}

export default Project;
