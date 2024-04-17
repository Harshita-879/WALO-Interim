import React from "react";

const Video = () => {
    return (
        <div className="flex justify-center items-center" id="video">
            <iframe 
                width="800" 
                height="500" 
                src="https://www.youtube.com/embed/Qgky93OHgnE" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Video;
