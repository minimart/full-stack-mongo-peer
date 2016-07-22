var router = require('express').Router();
// var Assignment = require('../models/assignments.js')
// var mongoose = require('mongoose');



router.get('/getAssignments', function(request, response){
  assignments.find({}, function(err, assignments){
    if(err){
      console.log('Failed to fetch assignment. Error: ', err);
      response.sendStatus(500);
    } else{
      console.log('Assignments fetched!', assignments);
      response.send(assignments);
    }
  })
});

// router.post('/postAssign')



module.exports = router;
