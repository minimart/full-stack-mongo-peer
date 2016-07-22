angular.module('assignmentApp', []);

angular.module('assignmentApp').controller('MainController', function($http) {
    var vm = this;

    //Submit user input data on button click and send to server
    vm.submitAssignment = function() {
        var sendData = {};

        sendData.assignment_number = vm.assignmentNumber;
        sendData.student_name = vm.studentName;
        sendData.score = vm.score;
        sendData.date_completed = new Date();
        sendData.notes = vm.notes;

        $http.post('/assignment/postAssignments', sendData).then(function(response) {
            console.log(response);
            getAssignments();
        }, function(response) {
            console.log('Post failed', response)
        })
    }


    //Refreshes page with current collection documents
    var getAssignments = function() {
        $http.get('/assignment/getAssignments').then(function(response) {
            vm.completedAssignments = response.data
        })
    };
    getAssignments();


    //Sends id of which document to be deleted
    vm.deleteAssignment = function(id) {
        $http.delete('/assignment/deleteAssignments/' + id).then(function(response) {
            console.log(response);
            getAssignments();
        });
    }


})
