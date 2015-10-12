var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(express.static(__dirname + "/../client/app/"));
app.use(bodyparser.json()); //necessary for grabbing stuff like req.body.

var port = 3000;


app.listen(port, function(){
  console.log("listening on " + port);
  console.log(__dirname);
});

// app.post('/usersignup', function(req, res){
//   console.log(req.body);
//   db.createWorkout(req.body);
//   console.log("usersignup received POST request.");
//   res.send(200, 'POST reqest to server.');
//   // res.end();
// });

// app.post('/workoutdata', function(req, res){
//   console.log("workoutdata received POST request.")
//   db.enterReps(req.body.week, req.body.day, req.body.workout, req.body.username, req.body.usermax);
//   res.send(200);
// });