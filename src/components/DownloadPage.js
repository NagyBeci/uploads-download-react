import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DownloadPage.css';

const DownloadPage = () => {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/list-files')
      .then(response => response.json())
      .then(data => setFiles(data))
      .catch(error => console.error('Error fetching file list:', error));
  }, []);

  const handleBack = () => {
    navigate('/transition');
  };

  const handleOpenInNewTab = (index, fileName) => {
    // Construct the URL for the file download from the server
    const fileUrl = `http://localhost:3001/uploads/${fileName}`;
    // Open the file URL in a new tab
    window.open(fileUrl, '_blank');
  };

  return (
    <div className="download-container">
      <button className="back-button" onClick={handleBack}>Back</button>
      <ul className="file-list">
        {files.map((file, index) => (
          <li key={index} className="file-item">
            <span className="file-name" onClick={() => handleOpenInNewTab(index, file)}>
              {file}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadPage;