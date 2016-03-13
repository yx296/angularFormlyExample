app.directive('dropzone', function() {
  return {
    link: function (scope, element, attrs) { 
      var item = element[0];

      item.ondrop = drop;
      item.ondragover = allowDrop;

      function allowDrop(ev) {
        ev.preventDefault();
      }

      function drop(ev) { 
        ev.preventDefault();
        var data = ev.dataTransfer.getData("id");
        var draggedText = document.getElementById(data).innerText;
        
        // ev.target.appendChild(document.getElementById(data));
        
        // for (var i = 0; i < item.children.length; i++) {
        //   var newItem = item.children[i];
        //   newList.push(newItem.innerText);
        // }

        if (ev.target.id === 'done') {
          scope.vm.boxTwoItems.push(draggedText)
        } else {
          scope.vm.boxOneItems.push(draggedText)
        }

        scope.$apply();

        // item.removeChild(item.children[2]);

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


