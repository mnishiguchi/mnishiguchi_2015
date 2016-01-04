# Routes

## Getting an id from the URL
We can gain access to the note's id in the following URL: http://example.com/#/notes/42 by injecting the **$routeParams** service into the NotesShowController.

Use the routeParams service to fetch a single note based on the id given in the URL from the server URL /notes/:id.
```js
angular.module('NoteWrangler')
.controller('NotesShowController', function($http, $routeParams) {
    var controller = this;

    $http({ method: "GET", url: "/notes/" + $routeParams.id})
    .success(function(data) {
        controller.note = data;
    });

});
```

==

## Example 1
app/js/app.js
```js
angular.module( 'NoteWrangler', ['ngRoute'] )
.config( ['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/', {
      redirectTo: '/users'
    })

    .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html',
      controller: function($http){

        var controller = this;
        $http({ method: 'GET', url: '/notes' }).success(function(data){
          controller.notes = data;
        });
        
      },
      controllerAs: 'notesCtrl'
    })

    .when('/users', {
      templateUrl: 'templates/pages/users/index.html'
    })

    .when('/notes/new', {
      templateUrl: 'templates/pages/notes/edit.html',
        controller: "NotesCreateController",
        controllerAs: "NotesCreateCtrl"

    })
    .otherwise({
      redirectTo: '/notes'
    });
}]);
```

app/templates/pages/notes/new.html
```html
<div class="new-note">
  <div class="new-note-container">
    <form class="form">
      <fieldset>
        <label for="title">Title</label>
        <input name="title" ng-model="note.title" />
      </fieldset>

      <fieldset>
        <label for="description">Description</label>
        <textarea name="description" ng-model="note.description"></textarea>
      </fieldset>

      <fieldset>
        <label for="content">Content</label>
        <textarea name="content" ng-model="note.content"></textarea>
      </fieldset>

      <button class="btn" ng-click="NotesCreateCtrl.saveNote(note)">Save</button>
    </form>
  </div>
</div>
```

app/js/notes-create-controller.html
```js
angular.module('NoteWrangler')
.controller('NotesCreateController', [function() {
  this.saveNote = function(note){
    $http({method: 'POST', url: '/notes', data: note});
  };
}]);
```
