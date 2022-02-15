import React from 'react'
import { Video, CloudinaryContext, Transformation } from "cloudinary-react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";

const VideoPage = () => {


  return (

    <CloudinaryContext cloud_name="icultivate">
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
      <div className="videoGrid2">
        <div className="videoSec">
          <h1>Cosmetic brand motion graphics</h1>
          <h2>Project details</h2>
          <p>Created by: Zinhle Buhlungu</p>
          <p>Year: 2021</p>
          <p>Branding: ATOBK </p>
          <h2>Tools used</h2>
          <p>- Blender 2.9</p>
          <p>- After Effects</p>
          <Link
            to={{ pathname: "https://www.behance.net/gallery/90183131/ATOBK-Package-Design?tracking_source=search_projects_recommended%7CATOBK" }} target="_blank"

            style={{
              color: "#000000",
              textDecoration: "none",
            }}>
            <motion.p
              whileHover={{ color: "#e20001" }}
              className="links">
              - View branding on Behance
            </motion.p>
          </Link>
          
          <Video
            loop
            height="100%"
            width="100%"
            controls
            autoPlay={false}
            muted={false}
            data-cld-autoplay-mode="on-scroll"
            publicId="https://res.cloudinary.com/database1z/video/upload/c_crop,h_500,w_983/v1643638412/Portfolio%20site/0001-0200_hbzveu.mov"
            format="mp4"
            className="cld-video-player cld-video-player-skin-light"
          >
            <Transformation quality="70" videoCodec="h264" />
          </Video>

        </div>
      </div>

      <div className="videoGrid2">
        <div className="videoSec">

        <h1>Coke can animation</h1>
          <h2>Project details</h2>
          <p>Created by: Zinhle Buhlungu</p>
          <p>Year: 2021</p>
          <p>Branding: Coke </p>
          <h2>Tools used</h2>
          <p>- Blender 2.9</p>
          <p>- After Effects</p>
          <Link
            to={{ pathname: "https://www.behance.net/gallery/132727057/Coke-cans-animation" }} target="_blank"

            style={{
              color: "#000000",
              textDecoration: "none",
            }}>
            <motion.p
              whileHover={{ color: "#e20001" }}
              className="links">
              -  View on Behance
            </motion.p>
          </Link>
          <Video
            loop
            height="100%"
            width="100%"
            controls
            autoPlay={false}
            muted={false}
            data-cld-autoplay-mode="on-scroll"
            publicId="https://res.cloudinary.com/database1z/video/upload/c_scale,h_500,w_983/v1643638610/Portfolio%20site/final_render_moojnv.mp4"
            format="mp4"
            className="cld-video-player cld-video-player-skin-light"
          >
            <Transformation quality="70" videoCodec="h264" />
          </Video>
        </div>
      </div>


      <div className="videoGrid2">
        <div className="videoSec">
          <h1>2D animated scenes</h1>
          <h2>Project details</h2>
          <p>Created by: Zinhle Buhlungu</p>
          <p>Year: 2021</p>
          <h2>Tools used</h2>
          <p>- Blender 2.9</p>
          <p>- After Effects</p>
          <p>- Photoshop</p>
          <p>- Huion H610X Drawing tablet</p>

          <Link
            to={{ pathname: "https://www.behance.net/gallery/115233455/Animation-process" }} target="_blank"
            style={{
              color: "#000000",
              textDecoration: "none",
            }}>
            <motion.p
              whileHover={{ color: "#e20001" }}
              className="links">
              - View on Behance
            </motion.p>
          </Link>
          <Video
            loop
            height="100%"
            width="100%"
            controls
            autoPlay={false}
            muted={false}
            data-cld-autoplay-mode="on-scroll"
            publicId="https://res.cloudinary.com/database1z/video/upload/c_scale,h_500,w_983/v1643654145/Portfolio%20site/Climbing_e6il9i.mp4"
            format="mp4"
            className="cld-video-player cld-video-player-skin-light"
          >
            <Transformation quality="70" videoCodec="h264" />
          </Video>
          <div className="videoGrid2">
            <div className="videoSec">
              <Video
                loop
                height="100%"
                width="100%"
                controls
                autoPlay={false}
                muted={false}
                data-cld-autoplay-mode="on-scroll"
                publicId="https://res.cloudinary.com/database1z/video/upload/c_scale,h_500,w_983/v1643654206/Portfolio%20site/Intro-sequence-video_pdxguk.mp4"
                format="mp4"
                className="cld-video-player cld-video-player-skin-light"
              >
                <Transformation quality="70" videoCodec="h264" />
              </Video>
            </div>
          </div>
        </div>
      </div>
    </CloudinaryContext>

  )
}

export default VideoPage;