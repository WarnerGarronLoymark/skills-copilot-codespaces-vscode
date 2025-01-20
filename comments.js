 // Create web server
 const http = require('http');
 const fs = require('fs');
 const express = require('express');
 const app = express();
 const bodyParser = require('body-parser');
 const port = 3000;
 var comments = [];

 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());

 app.get('/', (req, res) => {
     res.sendFile(__dirname + '/index.html');
 });

 app.get('/comments', (req, res) => {
     res.send(comments);
 });

 app.post('/comments', (req, res) => {
     comments.push(req.body.comment);
     res.send(comments);
 });

 app.listen(port, () => {
     console.log(`Server listening on port ${port}`);
 });