var app = angular.module("irTest", []);

app.controller("testCtrl", function($timeout) {
  var vm = this;
  
  vm.boxOneItems = ['lunch','dinner'];
  vm.boxTwoItems = ['breakfast', '2nd breakfast'];
  vm.saveMessage = ''

  var savedBoxOne = vm.boxOneItems.slice();
  var savedBoxTwo = vm.boxTwoItems.slice();

  vm.addToBoxOne = function() {
    vm.boxOneItems.push(vm.toDo);
    vm.toDo = '';
  };

  vm.moveRight = function() {
    if (!vm.boxOneItems.length) { return; }
    vm.boxTwoItems.push(vm.boxOneItems.shift());
  };

  vm.moveLeft = function() {
    if (!vm.boxTwoItems.length) { return; }
    vm.boxOneItems.unshift(vm.boxTwoItems.pop());
  };


  
  vm.saveState = function() {
    savedBoxOne = vm.boxOneItems.slice();
    savedBoxTwo = vm.boxTwoItems.slice();
    vm.saveMessage = 'Todos saved';
    $timeout(function() {
      vm.saveMessage = '';
    }, 1000)
  };

  vm.loadState = function() {
    vm.boxOneItems = savedBoxOne.slice();
    vm.boxTwoItems = savedBoxTwo.slice();
  };

});