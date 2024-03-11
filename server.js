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
const uploadsDir = path.join(__dirname, 'src/uploads');

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

// List files
app.get('/list-files', (req, res) => {
  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      console.error('Failed to list files:', err);
      res.status(500).send('Failed to list files');
      return;
    }
    res.json(files);
  });
});

// Serve files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'src/uploads')));

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