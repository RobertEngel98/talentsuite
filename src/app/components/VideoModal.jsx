"use client";
import React from "react";

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          ×
        </button>
        <h5>Intro ansehen</h5>
        <video controls style={{ width: "100%" }}>
          <source src="https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoModal;
