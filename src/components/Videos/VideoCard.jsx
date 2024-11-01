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
                className="w-7 h-7 md:w-9 md:h-9 text-red"
                src={PlayIcon}
                alt="play_icon"
              />
            </button>
            <p className="pl-2 text-md 2xl:text-xl video-title font-AstoriaRoman text-purple-900  font-medium leading-6">
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
            src={`https://www.youtube.com/embed/${videoData.id}?autoplay=1&mute=1`}
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
