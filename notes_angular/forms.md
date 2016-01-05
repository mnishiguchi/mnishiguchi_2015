# Forms
- Turn off default HTML validation to be consistent using `novalidate`
- Mark the required field using `required`
- Prevent the submit if not $valid

## Resetting form's state to prevent from showing error after submission
```js
// Reset the form's state
$scope.reviewForm.$setPristine();
$scope.reviewForm.$setUntouched();
```

## Detecting form state
```
@property {boolean} $untouched True if control has not lost focus yet.
@property {boolean} $touched True if control has lost focus.
@property {boolean} $pristine True if user has not interacted with the control yet.
@property {boolean} $dirty True if user has already interacted with the control.
```

==

## updateOnBlur
- Can specify the timing of updating the form variables.

```html
<!-- Search bar -->
<form class="form-inline">
  <div class="form-group">
    <div class="input-group">
      <input type="text"
        ng-model="vm.search"
        ng-model-options="{ updateOn: 'blur' }"
        ng-change="vm.fetchInfo()"
        class="form-control"
        placeholder="Enter movie name">
      <div class="input-group-addon">
        <a href=""><i class="fa fa-search"></i></a>
      </div>
    </div>
  </div>
</form>
```

