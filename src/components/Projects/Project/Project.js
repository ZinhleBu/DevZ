import React from 'react'
import { Parallax } from "react-parallax";
const Project = ({ project }) => {
    return (
        <div className="project-hero">
            <div className="container">
                <h1 style={{
                    marginBottom: "4rem"
                }}>
                    {project.name}
                </h1>
               
                    <Parallax bgImage={project.image} strength={200} style={{ borderRadius: "18px" }}>
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
                                }}></div>
                        </div>
                    </Parallax>
            </div>
        </div>
    )
}

export default Project
