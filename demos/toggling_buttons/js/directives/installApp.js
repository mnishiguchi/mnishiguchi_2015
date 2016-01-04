/**
 * Creating a new directive installApp
 * interactive directives that respond to user actions
 */
app.directive('installApp', function() {
  return {
    restrict: 'E',
    scope:    {},
    templateUrl: 'js/directives/installApp.html',

    /**
     * Scope   - the directive's scope
     * element - the directive's HTML element
     * attr    - contains the elements attributes
     */
    link: function(scope, element, attrs) {
      scope.buttonText = "Install",
      scope.installed  = false,

      scope.download = function() {
        element.toggleClass('btn-active')

        if(scope.installed) {
          scope.buttonText = "Install";
          scope.installed  = false;

        } else {
          scope.buttonText = "Uninstall";
          scope.installed  = true;
        }
      }
    }
  };
});
