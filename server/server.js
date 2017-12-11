const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const taskCtrl = require('./Controller/taskController')

//create our server
const app = new express();
const port = 4000;
//apply middleware
app.use(cors());
app.use(bodyParser.json());

//end points
// app.post('http://www.jservice.io/api/clues', taskCtrl.create);
app.get('/api/getQuestion', taskCtrl.getQuestion);
app.post('/api/saveQuestions', taskCtrl.saveQuestions);
app.put('/api/task/:id', taskCtrl.update);
app.put('/api/complete/:id', taskCtrl.complete);
app.delete('/api/task/:id', taskCtrl.delete);

//make server listener
app.listen(port, ()=>{
    console.log(`I'm listening on port ${port}`);
  });