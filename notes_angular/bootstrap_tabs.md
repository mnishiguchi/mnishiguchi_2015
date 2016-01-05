# Bootstrap tabs

app.js
```js
(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabId){
      return this.tab === tabId;
    };
  });

  var gems = [
    {
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "images/gem-02.gif",
        "images/gem-05.gif",
        "images/gem-09.gif"
      ],
      //...
```

index.html
```html
<section class="tab" ng-controller="TabController as TabCtrl">
  <ul class="nav nav-pills">
    <li ng-class="{ active:TabCtrl.isSet(1) }">
      <a href ng-click="TabCtrl.setTab(1)">Description</a></li>
    <li ng-class="{ active:TabCtrl.isSet(2) }">
      <a href ng-click="TabCtrl.setTab(2)">Specs</a></li>
    <li ng-class="{ active:TabCtrl.isSet(3) }">
      <a href ng-click="TabCtrl.setTab(3)">Reviews</a></li>
  </ul>
  <div class="panel" ng-show="TabCtrl.isSet(1)">
    <h4>Description</h4>
    <blockquote>{{ product.description }}</blockquote>
  </div>
  <div class="panel" ng-show="TabCtrl.isSet(2)">
    <h4>Specs</h4>
    <blockquote>Shine: {{ product.shine }}</blockquote>
  </div>
  <div class="panel" ng-show="TabCtrl.isSet(3)">
    <h4>Reviews</h4>
    <blockquote>{{ product.description }}</blockquote>
  </div>
</section>
```
