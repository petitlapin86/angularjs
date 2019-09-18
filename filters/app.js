angular.module('app', []).controller("MainController", function() {

  //array of objects with key value pairs
  //some of the people have the same phone number for this exercise
  this.people = [
      {
        name: "John Doe",
        phone: "555-1111"
      },
      {
        name: "Bill Smith",
        phone: "555-2222"
      },
      {
        name: "Mary Jones",
        phone: "555-3333"
      },
      {
        name: "Jane Doe",
        phone: "555-1111"
      },
      {
        name: "Ted Jones",
        phone: "555-3333"
      },
  ];

});
