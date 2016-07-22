angular.module('assignmentApp', []);

angular.module('assignmentApp').controller('MainController', function($http){
  var vm = this;

  vm.submitAssignment = function(){
    console.log('click');
    var sendData = {};

    sendData.assignment_number = vm.assignmentNumber;
    sendData.student_name = vm.studentName;
    sendData.score = vm.score;
    sendData.date_completed = new Date();
    sendData.notes = vm.notes;

    console.log(sendData);
  }

})
