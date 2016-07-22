var router = require('express').Router();
var Assignment = require('../models/assignments.js')
var mongoose = require('mongoose');


//Get all documents in collection
router.get('/getAssignments', function(request, response) {
    Assignment.find({}, function(err, assignments) {
        if (err) {
            console.log('Failed to fetch assignment. Error: ', err);
            response.sendStatus(500);
        } else {
            console.log('Assignments fetched!', assignments);
            response.send(assignments);
        }
    })
});


//Add new document to collection
router.post('/postAssignments', function(request, response) {
    var data = request.body;

    var createdAssignment = new Assignment({
        assignment_number: data.assignment_number,
        student_name: data.student_name,
        score: data.score,
        date_completed: new Date(),
        notes: data.notes
    });

    createdAssignment.save(function(err) {
        if (err) {
            console.log('Save error! : ', err);
            response.sendStatus(500);
        }
    });

    response.sendStatus(200);
})

//Remove document from collection
router.delete('/deleteAssignments/:id', function(request, response) {
    var id = request.params.id;
    console.log('click')
    Assignment.findByIdAndRemove(id, function(err) {
        if (err) {
            console.log('Problem with deleting!', err);
            response.sendStatus(500);
        } else {
            console.log('Assignment deleted');
            response.sendStatus(200);
        }
    })
})



module.exports = router;
