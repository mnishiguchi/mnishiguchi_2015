(function() {

  angular.module("NoteWrangler", [
    "ngRoute"
  ])

  .config(function($routeProvider) {

    $routeProvider
      .when('/notes', {
        templateUrl: 'templates/pages/notes/index.html'
      })
      .when('/users', {
        templateUrl: 'templates/pages/users/index.html'
      })
      .when('/notes/new', {
        templateUrl: 'templates/pages/notes/edit.html'
      })
      .when('/', {
        redirectTo: '/users'
      })
      // NOTE: The otherwise method is used to set a route
      // when no other route definition is matched.
      .otherwise({
        redirectTo: '/notes'
      });

})();

