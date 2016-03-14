app.directive('dropzone', function() {
  return {
    link: function (scope, element, attrs) { 
      element.css({cursor: 'pointer'})

      var item = element[0];

      item.ondrop = drop;
      item.ondragover = allowDrop;

      function allowDrop(ev) {
        ev.preventDefault();
      }

      function drop(ev) { 
        ev.preventDefault();
        var draggedId = ev.dataTransfer.getData("id");
        var draggedText = document.getElementById(draggedId).innerText.slice(0, -2); 
        // slice gets rid of the x from the delete button
        var draggedIdType = draggedId.slice(0, 4);

        var todosArray = document.getElementById('todo').children;
        var doneArray = document.getElementById('done').children;

        var boxOneItems = scope.vm.todo;
        var boxTwoItems = scope.vm.done;

        if (ev.target.id === 'done') { 
          if (draggedIdType === 'todo') { 
            updateModel(boxTwoItems, boxOneItems, todosArray, draggedText, draggedId);
          } else if (draggedIdType === 'done') {
            updateModel(boxTwoItems, boxTwoItems, doneArray, draggedText, draggedId);
          }
        } 

        if (ev.target.id === 'todo') {
          if (draggedIdType === 'done') {
            updateModel(boxOneItems, boxTwoItems, doneArray, draggedText, draggedId);
          } else if (draggedIdType ==='todo') {
            updateModel(boxOneItems, boxOneItems, todosArray, draggedText, draggedId)            
          }
        }
        scope.$apply();
      }
      
      function updateModel(toList, fromList, DOMCollection, text, draggedId) {
        toList.push(text);
        for (var i = 0; i < DOMCollection.length; i++) {  // need to delete dragged DOM node from dragged list
          var id = DOMCollection[i].id;
          if (id === draggedId) {
            fromList.splice(i, 1);
          }
        }
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
      }
    }
  };
});