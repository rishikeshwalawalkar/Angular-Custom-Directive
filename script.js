// Code goes here

var app = angular.module("app", []);

app.directive("userInfo" , function(){
  return{
    restrict : "E",
    //template: "Custom users....{{data}}" //scope inheritance, the directive will inherit from the controller where directive is written- dynamic injection
    templateUrl: "user.html"
  }
});

app.controller("usercontroller", function($scope){
  $scope.data = "Good Day!";
  $scope.user1 = {
    name : "Rishi",
    address : {
      street : "114, Royal Drive Apt 378",
      city : "Piscataway",
      zip : "08854"
    },
    friends : [
      'Ojas' , 'Nitin' , 'Nachiket'
      ]
  };
  
  $scope.clickMe = function(){
    $scope.isAdmin = true;
  }
})

app.controller("anothercontroller" , function($scope){
  $scope.data = "Happy Coding";
})