import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map((video) => (
    <VideoListItem
      onVideoSelect={onVideoSelect}
      key={video.etag}
      video={video}
    />
  ));

  return (
    <div className="video-list">
      <h6 className="fw-bold mb-3">Up Next</h6>
      <ul className="list-group">{videoItems}</ul>
    </div>
  );
};

export default VideoList;
