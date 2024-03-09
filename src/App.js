import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import TransitionPage from './components/TransitionPage';
import UploadPage from './components/UploadPage';
import DownloadPage from './components/DownloadPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/transition" element={<TransitionPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/download" element={<DownloadPage />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;