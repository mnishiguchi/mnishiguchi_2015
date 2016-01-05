# Dynamically changing page titles
- http://stackoverflow.com/questions/12506329/how-to-dynamically-change-header-based-on-angularjs-partial-view

**Directly modify the title element**
```js
// Set the tab position
vm.setTab = function(tab) {
  vm.tab = tab;

  // Set the page title via $window.
  $window.document.title = vm.tabNames[ tab ];
};
```

```html
<head>
  <title>Masatoshi Nishiguchi</title>
  ...
```

== 

**Modify the title via MainController's scope**

```html
<html
  lang="en-us"
  ng-app="mnApp"
  ng-controller="AppController">
<head>
  <title>{{ title }}</title>
  ...
```

```js
/**
 * The main Augular module for this website.
 */
(function() {

  // Module declaration.
  var mnApp = angular.module(
  "mnApp",
  [
    // Dependencies.
  ]);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  mnApp.controller(
  "AppController",
  function( $scope ) {

    $scope.title = "Masatoshi Nishiguchi";

  }); // end controller

})();

```

```js
$scope.$parent.title = vm.tabNames[ tab ] + " | Masatoshi Nishiguchi";
```

