angular.module('app', []).controller("MainController", function() {

  this.tasks = [
      {
          name: "Go to grocery",
          done: false
      },
      {
          name: "Walk the dog",
          done: false
      },
      {
          name: "Dinner with boss",
          done: false
      }
  ];

  //this is a add function
  this.add = function(newtask) {
    console.log("adding task: " + newtask.name);
    var task = {}; // create an empty object
    task.name = newtask.name; //define a newtask called name
    task.done = false;
    this.tasks.push(task); //push to task object array
    newtask.name = ""; //make form blank at the end so that input box clears
  };

//this is a delete function assigning a property to an anonymous function
//iterate through array of tasks and splice it from the array
  this.delete = function(task) {
    console.log("deleting task: " + task.name);
    for (var i =0; i < this.tasks.length; i++) {
      if (this.tasks[i].name === task.name) {
        this.tasks.splice(i,1);
        break;
      }
   }

  };
});
