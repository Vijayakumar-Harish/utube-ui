import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.medium.url;

  return (
    <li
      onClick={() => onVideoSelect(video)}
      className="list-group-item border-0 p-0 mb-2"
      style={{ cursor: "pointer" }}
    >
      <div className="d-flex align-items-start">
        <img
          src={imageUrl}
          alt={video.snippet.title}
          className="rounded me-2"
          style={{ width: "168px", height: "94px", objectFit: "cover" }}
        />
        <div className="flex-grow-1">
          <div className="fw-semibold small">{video.snippet.title}</div>
          <div className="text-secondary small">
            {video.snippet.channelTitle}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
