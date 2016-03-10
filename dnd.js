app.directive('dndBetween', function($parse) {
  return {
    // scope: {

    // },
    link:function (scope, element, attrs) { 
      var args = attrs.dndBetween.split(',');
      var targetArgs = $('#' + args[1]).attr('dnd-between').split(',');

      var toUpdate;
      var target;
      var startIndex = -1;

    // watch the model, so we always know what element
    // is at a specific position
      scope.$watch(args[0], function(value) {
        toUpdate = value;
      }, true)

      // also watch for changes in the target list
      scope.$watch(targetArgs[0], function(value) {
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
          console.log(targetArgs[0]);
          console.log(args[0]);

          // scope.$apply(toUpdate);
          // scope.$apply(target); //BUG!!!
        },
        connectWith: '#' + args[1]
      })
    }
  }
});