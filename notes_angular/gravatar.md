# Gravater

```js
function gravatarUrl(email, size) {
  return 'https://secure.gravatar.com/avatar/' + md5(email) + "?s=" + size;
}
```

## the gravatarForm directive

**gravatar.directive.js**
```js
/**
 * Defines gravatar related components.
 */
(function() {

  // Module declaration.
  var module = angular.module(
  "gravatarComponents",
  []);


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  module.directive(
  'gravatarForm',
  function () {

    return {
      restrict: "E",
      scope: {},
      templateUrl: "app/components/gravatar/gravatarForm.template.html",

      controllerAs: "vm",
      controller:
      [
        '$scope',
        function( $scope ) {

          var vm    = this;
          var props = $scope.props = $scope;  // Alias for $scope

          // State : none

        } // end function
      ] // end controller
    }; // end return
  }); // end directive


  module.directive(
  'gravatar',
  function () {

    return {
      restrict: "E",
      scope: {
        email: "=",
        size:  "="
      },
      templateUrl: "app/components/gravatar/gravatar.template.html",

      controllerAs: "vm",
      controller:
      [
        '$scope',
        function( $scope ) {

          var vm    = this;
          var props = $scope.props = $scope;  // Alias for $scope

          // State
          vm.url = "";

          // Expose the public functions.
          vm.gravatarUrl = gravatarUrl;

          // Get the initial image.
          vm.url = vm.gravatarUrl(props.email, props.size);

          // Keep watch for changes.
          $scope.$watch(
            'props.email',
            function(newVal, oldVal) {

              if (newVal !== oldVal) {
                vm.url = vm.gravatarUrl(newVal, props.size);
              }

            }
          );


          // ---
          // PUBLIC METHODS.
          // ---


          // I generate a garavater url for the specified email and size.
          function gravatarUrl(email, size) {

            // Standadize on the lowercase email.
            email = angular.isString(email) ? angular.lowercase(email) : "";

            return 'https://secure.gravatar.com/avatar/' + md5(email) + "?s=" + size;
          }

        } // end function
      ] // end controller
    }; // end return
  }); // end directive

})();
```

**gravatarForm.template.html**
```html
<!--
  gravatarForm
  - View template for the gravatarForm directive.
-->

<form novalidate
  class="form-inline navbar-form pull-right gravatar-form">

  <input type="email"
    ng-model="email"
    class="form-control"
    placeholder="Enter your email">

  <a
    href="http://www.gravatar.com"
    class="gravatarLink">

    <gravatar
      email="email"
      size="36">
    </gravatar>
  </a>

</form>
```

**gravatar.template.html**
```html
<!--
  gravatar
  - View template for the gravatar directive.
  - Required props:
    + email: An email address.
      * NOTE: Pass a varible that store an email rather than a string literal.
    + size: The image size.
-->

<img
  ng-src="{{ vm.url }}"
  class="gravatar">
</img>

```

gravatar.css
```css
.gravatar-form {
  display: table;
}

.gravatar-form > a {
  display: table-cell;
  padding-left: 5px;
}

.gravatarLink img {
  display: inline-block;
  width: 36px;
  height: 36px;
  border-radius: 4px;
}
```
