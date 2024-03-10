import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DownloadPage.css'; // Import the CSS styles

const DownloadPage = () => {
  const navigate = useNavigate();

  const files = ['document1.pdf', 'photo2.jpg', 'notes3.txt'];

  const handleBack = () => {
    navigate('/transition');
  };

  const handleDownload = (fileName) => {
    alert(`Simulated download of ${fileName}`);
  };

  return (
    <div className="download-container">
      <button className="back-button" onClick={handleBack}>Back</button>
      <ul className="file-list">
        {files.map((file, index) => (
          <li key={index} className="file-item" onClick={() => handleDownload(file)}>
            {file.split('.')[0]}...
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadPage;
