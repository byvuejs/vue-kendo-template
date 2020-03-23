const express = require('express');
const multer  = require('multer');
const cors = require('cors');
const app = express();

app.use(cors());

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      console.log('file', file);
      cb(null, file.originalname);
    }
  }),
});

app.post('/upload', upload.array('files'), (req, res, next) => {
  console.log('upload');
  console.log('req', req.files)
  res.sendStatus(201);
});

app.listen(3000, () => {
    console.log('server on, 3000');
});
