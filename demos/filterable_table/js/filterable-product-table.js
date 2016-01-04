(function() {

  // Create an application module for our FilterableProductTable.
  var app = angular.module( "FilterableProductTable", [] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  // I control the root of the application.
  angular.module( "FilterableProductTable" ).controller(
    "AppController",
    function( $scope ) {

      var vm = this;

      // Expose the products on the FilterableProductTable that are fetched from API.
      vm.products = [
        {category: "Sporting Goods", price: "49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "199.99", stocked: true, name: "Nexus 7"}
      ];

    }
  );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  // I provide a filterable table of products and prices.
  angular.module( "FilterableProductTable" ).directive(
    "filterableProductTable",
    function filterableProductTable() {

      // Return the directive configuration object.
      return({
        controller: function FilterableProductTableController( $scope ) {

          var vm    = this;
          var props = $scope.props = $scope;

          // Hold the state of the filtering so that it be passed both into
          // the search component as well as into the table.
          // This the highest common point.
          vm.filterText  = "";
          vm.inStockOnly = false;

          // Expose the public methods.
          vm.handleUserInput = handleUserInput;


          // ---
          // PUBLIC METHODS.
          // ---


          // I handle user input from the search box.
          // I update the state of the filtering.
          function handleUserInput( filterText, inStockOnly ) {

            vm.filterText  = filterText;
            vm.inStockOnly = inStockOnly;

          }

        },
        controllerAs: "vm",
        restrict: "E",
        scope: {
          products: "="
        },
        templateUrl: "filterable-product-table.html"
      });

    }
  );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  // I provide the search form for the filterable table component.
  angular.module( "FilterableProductTable" ).directive(
    "searchBar",
    function searchBar() {

      // Return the directive configuration object.
      return({
        controller: function SearchBarController( $scope ) {

          var vm    = this;
          var props = $scope.props = $scope;

          // I hold the form values for the ng-model bindings.
          // --
          // Since we don't want the ng-model bindings to alter the references
          // in the calling context, we'll create an intermediary structure
          // to hold the local data.
          vm.form = {
            filterText:  props.filterText,
            inStockOnly: props.inStockOnly
          };

          // I keep watch for changes on the props.
          // --
          // Since we're using an intermediary data structure,
          // we have to watch for changes on the props; and,
          // when they change, we have to synchronize the local form inputs.
          // --
          // NOTE: Watch configuration will set initial values.
          $scope.$watchCollection(
            "[ props.filterText, props.inStockOnly ]",
            function handlePropsChange() {

              vm.form.filterText  = props.filterText;
              vm.form.inStockOnly = props.inStockOnly;

            }
          );

          // I keep watch for changes on the user's input.
          // --
          // In order to facilitate the bi-directional data flow,
          // we have to watch for changes on the form inputs; and,
          // when they happen, we have to invoke the user input callback.
          $scope.$watchCollection(
            "[ vm.form.filterText, vm.form.inStockOnly ]",
            function handleInputChange( newValues, oldValues ) {

              // Ignore the configuration step since this doesn't
              // actually represent user interaction.
              if ( newValues === oldValues ) {

                return;

              }

              props.onUserInput({
                filterText:  vm.form.filterText,
                inStockOnly: vm.form.inStockOnly
              });

            }
          );

        },
        controllerAs: "vm",
        restrict: "E",
        scope: {
          filterText:  "=",
          inStockOnly: "=",
          onUserInput: "&"
        },
        templateUrl: "_search-bar.html"
      });

    }
  );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  // I provide the table grid for the filterable table component.
  angular.module( "FilterableProductTable" ).directive(
    "productTable",
    function productTable() {

      // Return the directive configuration object.
      return({
        controller: function ProductTableController( $scope ) {

          var vm    = this;
          var props = $scope.props = $scope;

          // Let's transform the incoming products array into something that
          // is a bit easier to render. Rather than a single array, we're
          // going to break the products down in a collection of Categories,
          // each of which has a collection of products.
          vm.categories = [];

          // Since we're employing a data-transformation, we have to watch
          // for changes on the props; and, when the products or the filter
          // criteria changes, we have to synchronize the transformed structure.
          // --
          // NOTE: Watch configuration will set initial values.
          $scope.$watchCollection(
            "[ props.products, props.filterText, props.inStockOnly ]",
            function handlePropsChange() {

              vm.categories = getFilteredProducts(
                props.products,
                props.filterText,
                props.inStockOnly
              );

            }
          );


          // ---
          // PRIVATE METHODS.
          // ---


          // I return the category breakdown for the given products after
          // the given filtering has been applied.
          function getFilteredProducts( products, filterText, inStockOnly ) {

            var categories = [];
            var category = null;
            var lastCategory = null;

            filterText = filterText.toLowerCase();

            products
              // Filter out the products that don't match the current criteria.
              .filter(
                function operator( product ) {

                  // Filter based on text.
                  if (
                    filterText &&
                    ( product.name.toLowerCase().indexOf( filterText ) === -1 )
                    ) {

                    return( false );

                  }

                  // Filter based on stock status.
                  if ( inStockOnly && ! product.stocked ) {

                    return( false );

                  }

                  // If we made it this far, the product was not
                  // filtered-out of the results.
                  return( true );

                }
              )
              // Now that we have the filtered products, break them
              // down into the different categories. And, since we pre-
              // filtered the products, we know that we won't get any
              // empty categories in the final breakdown.
              .forEach(
                function iterator( product ) {

                  if ( product.category !== lastCategory ) {

                    category = {
                      name: ( lastCategory = product.category ),
                      products: []
                    };

                    categories.push( category );

                  }

                  category.products.push({
                    name:    product.name,
                    stocked: product.stocked,
                    price:   product.price
                  });

                }
              )
            ;

            return( categories );

          }

        },
        controllerAs: "vm",
        restrict: "E",
        scope: {
          products:    "=",
          filterText:  "=",
          inStockOnly: "="
        },
        templateUrl: "_product-table.html"
      });

    }
  );

})()
