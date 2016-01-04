(function() {

  var app = angular.module('gemStore', []);


  // ------------------------------------------------------------------------ //
  // ------------------------------------------------------------------------ //


  angular.module( 'gemStore' ).controller(
    'MainController',
    function MainController( $scope ) {

      var vm = this;

      // A collection of products, initially set to data fetched from an API
      vm.products = [];    // Initialize the vm

      vm.products = data;  // Get data from API

  });


  // ------------------------------------------------------------------------ //
  // ------------------------------------------------------------------------ //


  angular.module( 'gemStore' ).directive(
    'productTitle',
    function productTitleDirective() {

      return {
        restrict: 'E',
        template: '<h3>{{ product.name }}' +
                    '<em class="pull-right">{{ product.price | currency }}</em>' +
                  '</h3>'
      };
    }
  );


  angular.module( 'gemStore' ).directive(
    'productGallery',
    function productGalleryDirective() {

      return {
        controller: "productGalleryController",
        controllerAs: 'vm',
        restrict: 'E',
        templateUrl: 'product-gallery.html',
      };
    }
  );


  angular.module( 'gemStore' ).controller(
    "productGalleryController",
    function productGalleryController( $scope ) {

      var vm    = this;
      var props = $scope.props = $scope;  // Alias for $scope

      // Current index of the gallery
      vm.current = 0;

      // Set the gallery's index
      vm.setCurrent = function(index){
        vm.current = index;
      };
    }
  );


  angular.module( 'gemStore' ).directive(
    'productTabs',
    function productTabsDirective() {

      return {
        controller: "productTabsController",
        controllerAs: "vm",
        restrict: "E",
        scope: {
          product: "="
        },
        templateUrl: 'product-tabs.html'
      };
    }
  );


  angular.module( 'gemStore' ).controller(
    "productTabsController",
    function productTabsController( $scope ) {

      var vm    = this;
      var props = $scope.props = $scope;  // Alias for $scope

      // State
      // Hold the current position of the tabs, initially 1
      vm.tab = 1;

      // Set the tab position
      vm.setTab = function(tab) {
        vm.tab = tab;
      };

      // Check if a tab is active
      vm.isSet = function(tab) {
        return (vm.tab === tab);
      };
    }
  );


  angular.module( 'gemStore' ).directive(
    'productReviewForm',
    function productReviewFormDirective() {

      return {
        controller: 'productReviewFormController',
        controllerAs: 'vm',
        restrict: "E",
        scope: {
          product: "="
        },
        templateUrl: 'product-review-form.html',
      };
    }
  );


  angular.module( 'gemStore' ).controller(
    "productReviewFormController",
    function productReviewFormController( $scope ) {

      var vm    = this;
      var props = $scope.props = $scope;  // Alias for $scope  // Alias for $scope

      // Current state of the review field
      vm.review = {}; // Bound to the fields

      // Expose the public methods.
      vm.addReview = addReview;


      // ---
      // PUBLIC METHODS.
      // ---

      // Called when user submits the review
      function addReview(product) {

        console.log("addReview invoked");

        product.reviews.push(vm.review);  // Add the review
        vm.review = {};                   // Clear the fields

        // Reset the form's state
        $scope.reviewForm.$setPristine();
        $scope.reviewForm.$setUntouched();
      }
    }
  );


  // ------------------------------------------------------------------------ //
  // ------------------------------------------------------------------------ //


  // Represents hypothetical data fetched from an API
  var data = [
    {
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "http://placehold.it/150/FFBFD2",
        "http://placehold.it/150/FFBFC8",
        "http://placehold.it/150/FFBFBF"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "http://placehold.it/150/FFBFD2",
        "http://placehold.it/150/FFBFC8",
        "http://placehold.it/150/FFBFBF"
      ],
      reviews: [
        {
          stars: 3,
          body: "I think this gem was just OK, could honestly use more shine, IMO.",
          author: "JimmyDean@example.org",
          createdOn: 1397490980837
        }, {
          stars: 4,
          body: "Any gem with 12 faces is for me!",
          author: "gemsRock@example.org",
          createdOn: 1397490980837
        }
      ]
    }, {
      name: 'Zircon',
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        "http://placehold.it/150/FFBFD2",
        "http://placehold.it/150/FFBFC8",
        "http://placehold.it/150/FFBFBF"
      ],
      reviews: [
      {
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }];

})();
