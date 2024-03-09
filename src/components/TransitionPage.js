import React from 'react';
import { useHistory } from 'react-router-dom';

const TransitionPage = () => {
  const history = useHistory();

  const handleUpload = () => {
    history.push('/upload'); // Navigate to UploadPage
  };

  const handleDownload = () => {
    history.push('/download'); // Navigate to DownloadPage
  };

  return (
    <div>
      <button onClick={handleUpload}>Upload</button>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default TransitionPage;
