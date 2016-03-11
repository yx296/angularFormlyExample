app.directive('dropzone', function() {
  return {
    link: function (scope, element, attrs) { 
      var element = element[0];

      element.ondrop = drop;
      element.ondragover = allowDrop;

      function allowDrop(ev) {
        ev.preventDefault();
      }

      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("id");
        ev.target.appendChild(document.getElementById(data));
        console.log(ev.target);
      }
    }
  }
});


app.directive('dnd', function() {
  return {
    link: function (scope, element, attrs) { 
      var element = element[0];
      
      element.draggable = true;
      element.ondragstart = drag;

      function drag(ev) {
        ev.dataTransfer.setData("id", ev.target.id);
      }
    }
  }
});


