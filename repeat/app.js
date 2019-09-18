angular.module('app', []).controller("MainController", function() {
    this.tasks = [ //this is a task
        {
            name: "Go to grocery", //pairs
            done: false //if you change to true check box gets checked
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
});
