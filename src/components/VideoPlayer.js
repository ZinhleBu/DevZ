import React, { useRef } from "react";

import { Video, CloudinaryContext, Transformation } from "cloudinary-react";
const VideoPlayer = () => {
    const videoRef = useRef();
    return (
        <CloudinaryContext cloud_name="icultivate">
            <div>
                <Video
                    loop
                    data-cld-font-face="Roboto"
                    data-cld-autoplay-mode="on-scroll"
                    data-cld-colors='{ "base": "#e20001", "accent": "#e67b7b", "text": "#fff" }'
                    width="100%"
                    controls
                    publicId="pexels-cottonbro-9121246_foi99b" resourceType="video"
                    class="cld-video-player cld-video-player-skin-light"
                >

                </Video>
            </div>
        </CloudinaryContext>
    );
};
export default VideoPlayer;