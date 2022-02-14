import React from 'react'
import { Video, CloudinaryContext, Transformation } from "cloudinary-react";

const VideoPage = () => {
  return (
    <CloudinaryContext cloud_name="icultivate">
      <div className="videoGrid">
        <div className="videoSec">
          
          <Video
            loop
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
        <div className="videoSec">
          <Video
            loop
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
        <div className="videoSec">
          <Video
            loop
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
        <div className="videoSec">
          <Video
            loop
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
        </div>
      </div>
    </CloudinaryContext>)
}

export default VideoPage;