app.directive('dndBetween', function() {
  return {

    link: function (scope, element, attrs) { 
      var args = attrs.dndBetween.split(',');
      
      var listModel = args[0];
      var otherListId = args[1];

      var targetArgs = $('#' + otherListId).attr('dnd-between').split(','); 
      //get access to other listModel through targetArgs

      var otherListModel = targetArgs[0];


      var toUpdate;
      var target;
      var startIndex = -1;

      scope.$watch(listModel, function(value) {
        toUpdate = value;
      }, true)

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

          if (newParent === otherListId) {
            target.splice(newIndex, 0, toMove);
          } else {
            toUpdate.splice(newIndex, 0, toMove);
          }
        },
        connectWith: '#' + otherListId
      })
    }
  }
});