import React from 'react';
import { useNavigate } from 'react-router-dom';

const TransitionPage = () => {
  const navigate = useNavigate();

  const handleUpload = () => {
    navigate('/upload'); // Navigate to UploadPage
  };

  const handleDownload = () => {
    navigate('/download'); // Navigate to DownloadPage
  };

  return (
    <div>
      <button onClick={handleUpload}>Upload</button>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default TransitionPage;