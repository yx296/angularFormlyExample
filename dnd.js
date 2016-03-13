app.directive('dropzone', function() {
  return {
    link: function (scope, element, attrs) { 
      var item = element[0];

      item.ondrop = drop;
      item.ondragover = allowDrop;

      function allowDrop(ev) {
        ev.preventDefault();
      }


      function updateModel() {
        
      }


      function drop(ev) { 
        ev.preventDefault();
        var data = ev.dataTransfer.getData("id");
        var draggedText = document.getElementById(data).innerText;
        
        var deleteIndex;

        var draggedId = document.getElementById(data).id
        var draggedIdType = draggedId.slice(0, 4);

        var todo = document.getElementById('todo');
        var todosArray = Array.prototype.slice.call(todo.children);
        


        if (ev.target.id === 'done') { 
          if (draggedIdType === 'todo') { 
            scope.vm.boxTwoItems.push(draggedText)
            for (var i = 0; i < todosArray.length; i++) {
              var id = todosArray[i].id;
              if (id === draggedId) {
                deleteIndex = i;
              }
            }
            scope.vm.boxOneItems.splice(deleteIndex, 1);
          } else if (draggedIdType === 'done') {
            deleteIndex = scope.vm.boxTwoItems.indexOf(draggedText);
            scope.vm.boxTwoItems.splice(deleteIndex, 1);
            scope.vm.boxTwoItems.push(draggedText)
          }
        } 

        if (ev.target.id === 'todo') {
          if (draggedIdType === 'done') {
            deleteIndex = scope.vm.boxTwoItems.indexOf(draggedText);
            scope.vm.boxTwoItems.splice(deleteIndex, 1);
            scope.vm.boxOneItems.push(draggedText);
          } else if (draggedIdType ==='todo') {
            deleteIndex = scope.vm.boxOneItems.indexOf(draggedText);
            scope.vm.boxOneItems.splice(deleteIndex, 1);
            scope.vm.boxOneItems.push(draggedText);
          }
        }

        scope.$apply();


      }
    }
  }
});


app.directive('dnd', function() {
  return {
    link: function (scope, element, attrs) { 
      var item = element[0];
      
      item.draggable = true;
      item.ondragstart = drag;

      function drag(ev) {
        ev.dataTransfer.setData("id", ev.target.id);
        // var newList = [];
        
        // for (var i = 0; i < item.children.length; i++) {
        //   var newItem = item.children[i];
        //   newList.push(newItem.innerText);
        // }

        // scope.vm.boxOneItems = newList;
      }
    }
  }
});


