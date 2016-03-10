app.directive('dndBetween', function() {
  return {

    link: function (scope, element, attrs) { 
      var args = attrs.dndBetween.split(',');
      
      var listModel = args[0];
      var otherListId = args[1];

      var targetArgs = $('#' + otherListId).attr('dnd-between').split(','); 
      //get access to other listModel through targetArgs

      var otherListModel = targetArgs[0];

      console.log('args', args);
      console.log('targetArgs', targetArgs);


      var toUpdate;
      var target;
      var startIndex = -1;

    // watch the model, so we always know what element
    // is at a specific position
      scope.$watch(listModel, function(value) {
        toUpdate = value;
      }, true)

      // also watch for changes in the target list
      scope.$watch(otherListModel, function(value) {
        target = value;
      }, true)

      $(element[0]).sortable({
        items: 'li',
        start: function (event, ui) { 
          startIndex = ui.item.index();
          console.log(startIndex);
        },
        stop: function(event, ui) { 
          var newParent = ui.item[0].parentNode.id;
          var newIndex = ui.item.index();
          var toMove = toUpdate[startIndex];
          
          toUpdate.splice(startIndex, 1);

          if (newParent === args[1]) {
            target.splice(newIndex, 0, toMove);
          } else {
            toUpdate.splice(newIndex, 0, toMove);
          }
        },
        connectWith: '#' + args[1]
      })
    }
  }
});