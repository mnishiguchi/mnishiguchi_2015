(function() {

  var app = angular.module("mouseEventsApp", [])

  //-------------------
  // Directives
  //-------------------

  // NOTE: Directives need not return a configuration object if we only use
  // link function and restrict option is 'A' (attribute)

  // Respond to mouseenter event
  app.directive(
    "enter",
    function onMouseEnter() {

      // Return the directive configuration object.
      return function(scope, element) {
        element.bind("mouseenter", function() {
          // Do something
          console.log("I am inside of you!");
        })
      }
    }
  )

  // Respond to mouseleave event
  app.directive(
    "leave",
    function onMouseLeave() {

      return function(scope, element) {
        element.bind("mouseleave", function() {
          // Do something
          console.log("I am leaving!");
        })
      }
    }
  )

})()
