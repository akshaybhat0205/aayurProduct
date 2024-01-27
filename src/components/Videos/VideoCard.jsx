import React from "react";
import "./Videos.css";

import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { PlayIcon, TranparentImage } from "../../Image";
import VideoModalComponent from "../Modal/VideoModalComponent";

const VideoCard = (props) => {
  const { videoData } = props;
  const [showExclusiveVideoModal, setShowExclusiveVideoModal] = useState(false);

  function onCloseModal() {
    setShowExclusiveVideoModal(false);
  }
  function onClickPlayButton() {
    setShowExclusiveVideoModal(true);
  }

  let dynamicVideoId = "qFxrK1RPwIs";
  return (
    <>
      {/* exclusive video card start */}
      <div onClick={onClickPlayButton} className="video-card-container cursor-pointer">
        <div className="relative h-full">
          <img
            className="rounded-lg object-cover relative w-full"
            src={videoData.thumbnail}
            alt={videoData.title}
          />
          <div className="exclusive-video-button-container">
            <button onClick={onClickPlayButton} className="cursor-pointer">
              <img
                className="w-10 h-10 md:w-12 md:h-12 text-white"
                src={PlayIcon}
                alt="play_icon"
              />
            </button>
            <p className="text-xl video-title text-white font-medium leading-6">
              {videoData.video_title}
            </p>
          </div>
        </div>
      </div>
      {/* exclusive video card end */}

      <VideoModalComponent
        show={showExclusiveVideoModal}
        onClose={onCloseModal}
        maxSizeStyle="max-w-5xl"
      >
        <div className="flex justify-end exclusive-video-modal">
          <IoCloseOutline onClick={onCloseModal} className="video-modal-icon" />
        </div>

        <div className="relative">
          <img
            className="max-w-full video-height"
            src={TranparentImage}
            alt="youtube video"
          />
          <iframe
            width="100%"
            src={`https://www.youtube.com/embed/${dynamicVideoId}?autoplay=1&mute=1`}
            title="YouTube video player"
            className="absolute top-0 w-full right-0 left-0 h-full"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </VideoModalComponent>
    </>
  );
};

export default VideoCard;
