import React from 'react';
import { useNavigate } from 'react-router-dom';

const DownloadPage = () => {
  const navigate = useNavigate();

  // Simulated list of file names
  const files = ['document1.pdf', 'photo2.jpg', 'notes3.txt'];

  const handleBack = () => {
    navigate('/transition'); // Navigate back to TransitionPage
  };

  const handleDownload = (fileName) => {
    // Simulate file download
    alert(`Simulated download of ${fileName}`);
    // In a real application, you would fetch the file from the server here
  };

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <div>
        <ul>
          {files.map((file, index) => (
            <li key={index} onClick={() => handleDownload(file)}>
              {file.split('.')[0]}...
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DownloadPage;