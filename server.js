const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'src/uploads/' });

app.use(express.static('src'));

app.post('/upload', upload.array('files'), (req, res) => {
  res.send('Upload successful!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});