const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Set up storage engine for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Serve static files from the "uploads" folder
app.use('/uploads', express.static('uploads'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to handle file upload
app.post('/upload', upload.single('media'), (req, res) => {
  const caption = req.body.caption;
  const file = req.file;

  // Save file info to the database (not shown here)
  console.log(`Uploaded file: ${file.filename} with caption: ${caption}`);

  res.send('File uploaded successfully');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
