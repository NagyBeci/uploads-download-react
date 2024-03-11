const express = require('express');
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();

// Apply CORS middleware to allow cross-origin requests
app.use(cors({
  origin: 'http://localhost:3000' // Allow requests from this origin
}));

// Define the absolute path to the uploads directory
const uploadsDir = path.resolve('S:/Html Projects/Download and Upload Basic/uploads-download-react/src/uploads');

// Create the uploads directory if it doesn't exist
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => cb(null, file.originalname) // Preserve the original file name
});

const upload = multer({ storage });

// Define the route for file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  res.status(200).send({ message: 'File uploaded successfully', file: req.file });
});

// Additional error handling for Multer
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // A Multer error occurred when uploading.
    return res.status(500).send({ error: err.message });
  } else if (err) {
    // An unknown error occurred when uploading.
    return res.status(500).send({ error: err.message });
  }

  // Everything went fine.
  next();
});

// Listen on the specified port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
