import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import TransitionPage from './components/TransitionPage';
import UploadPage from './components/UploadPage'; // Import or define placeholder components for UploadPage
import DownloadPage from './components/DownloadPage'; // Import or define placeholder components for DownloadPage

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/transition" component={TransitionPage} />
        <Route path="/upload" component={UploadPage} /> {/* Placeholder or actual component */}
        <Route path="/download" component={DownloadPage} /> {/* Placeholder or actual component */}
        {/* Other routes */}
      </Switch>
    </Router>
  );
}

export default App;