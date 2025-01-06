import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => {
  const [height, setHeight] = useState("580px");
  const [width, setWidth] = useState("63%");

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth <= 768) {
        setHeight("200px");
        setWidth("90%");
      } else if (window.innerWidth <= 1200) {
        setHeight("330px");
      } else {
        setHeight("600px");
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return (
    <div className="flex items-center justify-center w-full h-full">
      {" "}
      <ReactPlayer
        url={url}
        width={width}
        height={height}
        controls={true}
        className="video-player"
      />{" "}
    </div>
  );
};
export default VideoPlayer;
