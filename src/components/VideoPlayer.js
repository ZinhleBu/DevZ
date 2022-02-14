import React from "react";

import { Video, CloudinaryContext, Transformation } from "cloudinary-react";

const VideoPlayer = () => {
    return (
        <CloudinaryContext cloud_name="icultivate">

            <div className="videoGrid">
                <div className="vid1"><Video
                    loop
                    width="100%"
                    autoPlay={true}
                    muted={true}
                    data-cld-autoplay-mode="on-scroll"
                    publicId="https://res.cloudinary.com/database1z/video/upload/v1643638412/Portfolio%20site/0001-0200_hbzveu.mov"
                    format="mp4"
                    className="cld-video-player cld-video-player-skin-light"
                >
                    <Transformation quality="10" videoCodec="h264" />
                </Video>
                </div>
                <div className="vid2">
                        <Video
                            loop
                            width="100%"
                            muted={true}
                            autoPlay={true} data-cld-autoplay-mode="on-scroll"
                            publicId="https://res.cloudinary.com/database1z/video/upload/v1643638610/Portfolio%20site/final_render_moojnv.mp4"
                            format="mp4"
                            className="cld-video-player cld-video-player-skin-light"
                        >
                            <Transformation quality="10" videoCodec="h264" />

                        </Video>
                    </div>



            </div>


        </CloudinaryContext>
    );
};
export default VideoPlayer;