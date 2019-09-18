angular.module('app', []).controller("MainController", function() {

  //purposely trying currency filter on different types of input
  this.items = [
      {
        name: "Book",
        price: "5.95"
      },
      {
        name: "Mint",
        price: ".15"
      },
      {
        name: "Printer",
        price: "240"
      },
      {
        name: "Thing",
        price: ""
      },
      {
        name: "Wisdom",
        price: "Priceless" //currency cannot read a string as a number so nothing is displayed 
      },
  ];

});
