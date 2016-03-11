app.directive('dragDrop', function() {
  return {
    link: function (scope, element, attrs) { 
      var onDrop = element[0].ondrop;
      console.log(onDrop);
      // // console.log(element);
      // element[0].addEventListener(onDrop, function() {
      //   console.log('wtf');
      // })
      // // element.on(onDrop, function() {
      // //   console.log('jabba');
      // // })
    }
  }
});


