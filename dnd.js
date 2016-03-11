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
        ev.target.appendChild(document.getElementById(data));

        var newList = [];
        
        for (var i = 0; i < item.children.length; i++) {
          var newItem = item.children[i];
          newList.push(newItem.innerText);
        }

        scope.vm.boxTwoItems = newList;
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
      }
    }
  }
});


