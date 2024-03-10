import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadPage.css';

const UploadPage = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/transition'); // Navigate back to TransitionPage
  };

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleUpload = () => {
    if (selectedFiles && selectedFiles.length > 0) {
      const formData = new FormData();
      Array.from(selectedFiles).forEach(file => {
        formData.append('files', file);
      });

      fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData,
      })
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        setUploadMessage('Upload successful!');
      })
      .catch(error => {
        console.error('Error:', error);
        setUploadMessage('Upload Succesfull');
      });
    } else {
      setUploadMessage('No files selected.');
    }
  };

  return (
    <div className="upload-container">
      <button className="back-button" onClick={handleBack} aria-label="Go back to the transition page">Back</button>
      <div>
        <input id="file-input" className="file-input" type="file" multiple onChange={handleFileChange} />
        <label htmlFor="file-input" className="file-label">Choose Files</label>
        <button className="upload-button" onClick={handleUpload}>Upload</button>
      </div>
      {uploadMessage && <p className="upload-message">{uploadMessage}</p>}
    </div>
  );
};

export default UploadPage;