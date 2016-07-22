var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;
var index = require('./routes/index.js');
var Assignment = require('./models/assignments.js');
var assignmentRoute = require('./routes/assignment.js')

MongoDB.on('error', function(err){
  console.log('mongodb connection error: ', err);
});
MongoDB.once('open', function() {
  console.log('MongoDB connection open!')
});

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', index);
app.use('/assignments', assignmentRoute);

// var createdAssignment = new Assignment({
//   assignment_number: 1,
//   student_name: 'Joe Schmoe',
//   score: 85,
//   date_completed: new Date(),
//   notes: 'Nice work, loser.'
// });
// createdAssignment.save(function(err){
//   if(err){
//     console.log('Save error! : ', err);
//     response.sendStatus(500);
//   }else {
//     console.log('Save SUCCESS!')
//     response.sendStatus(200);
//   }
// });



var server = app.listen(3000, function(){
  var port = server.address().port
  console.log('Listening on port ', port);
});
