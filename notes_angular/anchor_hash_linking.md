# Adding anchor hash linking

- [How to handle anchor hash linking in AngularJS](http://stackoverflow.com/questions/14712223/how-to-handle-anchor-hash-linking-in-angularjs)
- [How to set the id attribute of a HTML element dynamically with angular js?](http://stackoverflow.com/questions/23655009/how-to-set-the-id-attribute-of-a-html-element-dynamically-with-angular-js)

```js
// DEPENDENCIES
// "$location", "$anchorScroll"

// I scroll to the element with the specified id.
function scrollTo(id) {

  var old = $location.hash();
  $location.hash(id);
  $anchorScroll();
  // Reset to old to keep any additional routing logic from kicking in
  $location.hash(old);
}

```

```html
<div
  ng-attr-id="{{ vm.topId }}">
</div>

...

<div class="clearfix"></div>

<a ng-click="vm.scrollTo(vm.topId)">Top</a>
```
