# Scope

## Accessing parent scope from child controller
- [Access parent scope from child controller](http://stackoverflow.com/questions/21453697/angularjs-access-parent-scope-from-child-controller)

```html
<div ng-controller="ParentCtrl">
    <div ng-controller="ChildCtrl">
    </div>
</div>
```

```js
function ParentCtrl($scope) {
    $scope.cities = ["NY", "Amsterdam", "Barcelona"];
}

function ChildCtrl($scope) {
    $scope.parentcities = $scope.$parent.cities;
}
```

==

## Accessing specific controller's scope
- http://stackoverflow.com/questions/22570357/angularjs-access-controller-scope-from-outside

```html
<!DOCTYPE html>
<html
  lang="en-us"
  ng-app="app"
  ng-controller="AppController as appCtrl">
  ...
```

```js
function setTab(tabIndex) {
    vm.tabIndex = tabIndex;

    // Set the page title.
    var appCtrlElement = document.querySelector('html');
    var appCtrlScope   = angular.element(appCtrlElement).scope();
    appCtrlScope.title = vm.tabNames[ tabIndex ] + " | Masatoshi Nishiguchi";
};
```

==

## Keeping watch on state change

```js
// Keep watch on props.info.Response then update vm.isDataAvailable.
// https://docs.angularjs.org/api/ng/type/$rootScope.Scope
$scope.$watch(
  function() {
    return props.info.Response;
  },
  function(newVal, oldVal) {
    if ( newVal !== oldVal ) {
      vm.isDataAvailable = (props.info.Response === 'True');
    }
  }
); // end $scope.$watch
```
