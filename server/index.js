'use strict';

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
      cb(null, file.originalname);
    }
  }),
});

app.post('/upload', upload.array('files'), (req, res, next) => {
  res.status(201).json(req.files);
});

app.post('/remove', (req, res, next) => {
  res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('server on, http://localhost:3000');
});
