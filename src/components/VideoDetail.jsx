import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className="text-center mt-5 fs-4">Loading...</div>;
  }

  const videoId = video.id.videoId || video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
      <div className="ratio ratio-16x9 rounded shadow-sm">
        <iframe
          src={url}
          title="YouTube video player"
          allowFullScreen
          style={{ border: 0 }}
        ></iframe>
      </div>

      <div className="mt-3">
        <h5 className="fw-semibold">{video.snippet.title}</h5>
        <p className="text-secondary small">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
