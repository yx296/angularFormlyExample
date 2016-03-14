var app = angular.module("irTest", []);

app.controller("testCtrl", function() {
  var vm = this;
  
  vm.boxOneItems = ['lunch','dinner'];
  vm.boxTwoItems = ['breakfast', '2nd breakfast'];

  vm.addToBoxOne = function() {
    vm.boxOneItems.push(vm.toDo);
    vm.toDo = '';
  }

  vm.moveRight = function() {
    if (!vm.boxOneItems.length) { return; }
    vm.boxTwoItems.push(vm.boxOneItems.shift());
  }

  vm.moveLeft = function() {
    if (!vm.boxTwoItems.length) { return; }
    vm.boxOneItems.unshift(vm.boxTwoItems.pop());
  }
});