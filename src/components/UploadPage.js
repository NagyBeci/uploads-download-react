import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadPage.css';

const UploadPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/transition');
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      alert('No file selected!');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
  
    fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
      return response.text();
    })
    .then(result => alert('Upload successful!'))
    .catch(error => alert(`Upload failed: ${error}`));
  };

  return (
    <div className="upload-container">
      <button className="back-button" onClick={handleBack}>Back</button>
      <input
        id="file-input"
        className="file-input"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="file-input" className="file-label">Choose File</label>
    </div>
  );
};

export default UploadPage;
