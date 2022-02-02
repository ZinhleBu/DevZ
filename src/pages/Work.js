import React from 'react'
import Projects from '../components/Projects/Projects'
import VideoPlayer from "../components/VideoPlayer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Work() {
    return (
        <div>
            <Projects />
            <div className="video-sec">
                        <h1>Video Production</h1>
                        <h2>3D and 2D animation</h2>
                        <p>Some of my animation work ive done in the past year.</p>
                        <VideoPlayer />
                        <div className="links">
                            <Link
                                to='/work'
                                style={{
                                    color: "#000000",
                                }}>
                                <p>
                                    See more
                                </p>
                            </Link>
                        </div>
                    </div>
        </div>
    )
}

export default Work
