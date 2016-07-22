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
    $http.post('/assignment/postAssignments', sendData).then(function(response){
      console.log(response);
    }, function(response){
      console.log('Post failed', response)
    })
    getAssignments();
  }
var getAssignments = function(){
  $http.get('/assignment/getAssignments').then(function(response){
  console.log(response);
  vm.completedAssignments = response.data}
  )};
  getAssignments();

vm.deleteAssignment = function(id){
console.log(id);
  $http.delete('/assignment/deleteAssignments/'+id).then(function(response){
    console.log(response);
    getAssignments();
  });

}

})
