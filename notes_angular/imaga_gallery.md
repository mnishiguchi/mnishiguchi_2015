# Image gallery

app.js
```js
(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
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
```

index.html
```html
      <!-- Image Gallery  -->
      <div class='gallery' ng-controller="GalleryController as gallery"
                           ng-show="product.images.length">
        <img ng-src="{{ product.images[gallery.current] }}" />
        <ul class="list-inline thumbs">
          <li class="thumbnail" ng-repeat="image in product.images">
            <img ng-src="{{ image }}" />
          </li>
        </ul>
      </div>
```
