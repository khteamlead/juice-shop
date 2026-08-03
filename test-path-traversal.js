// test-path-traversal.js
const fs = require('fs');
const express = require('express');
const app = express();

app.get('/download', (req, res) => {
  const fileName = req.query.file;
  const filePath = './uploads/' + fileName;
  res.sendFile(filePath);
});
