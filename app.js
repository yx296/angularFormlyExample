var app = angular.module("irTest", []);

app.controller("testCtrl", function($timeout) {
  var vm = this;
  
  vm.todo = ['lunch','dinner'];
  vm.done = ['breakfast', '2nd breakfast'];
  vm.saveMessage = ''

  var savedBoxOne = vm.todo.slice();
  var savedBoxTwo = vm.done.slice();

  vm.addToBoxOne = function() {
    vm.todo.push(vm.toDo);
    vm.toDo = '';
  };

  vm.moveRight = function() {
    if (!vm.todo.length) { return; }
    vm.done.push(vm.todo.shift());
  };

  vm.moveLeft = function() {
    if (!vm.done.length) { return; }
    vm.todo.unshift(vm.done.pop());
  };
  
  vm.saveState = function() {
    savedBoxOne = vm.todo.slice();
    savedBoxTwo = vm.done.slice();
    vm.saveMessage = 'Todos saved';
    $timeout(function() {
      vm.saveMessage = '';
    }, 1000)
  };

  vm.loadState = function() {
    vm.todo = savedBoxOne.slice();
    vm.done = savedBoxTwo.slice();
  };

  vm.deleteTask = function(index, event) {
    var type = event.target.id.slice(0,4);
    vm[type].splice(index, 1);
  };
});