// Creating a new directive appInfo
app.directive('appInfo', function() {
  return {
    restrict: 'E',  // Used as new HTML element
    scope: {
      info: '='     // Look for an attribute named info in the appInfo element
    },
    // Specifies the HTML to use in order to display the data in scope.info
    templateUrl: 'js/directives/appInfo.html'
  };
});
