import React from "react";
import { useNavigate } from "react-router-dom";
import "./TransitionPage.css";

const TransitionPage = () => {
  const navigate = useNavigate();

  const handleUpload = () => {
    navigate('/upload'); // Navigate to UploadPage
  };

  const handleDownload = () => {
    navigate('/download'); // Navigate to DownloadPage
  };

  return (
    <div className="transition-page">
      <button onClick={handleUpload} className="button">
        Upload
      </button>
      <button onClick={handleDownload} className="button">
        Download
      </button>
    </div>
  );
};

export default TransitionPage;