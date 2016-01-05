(function() {

  angular
    .module( "app" )
    .component( "filterableTable", {

      bindings: {
        products: "="
      },
      templateUrl: "components/filterable_table.html",

      controllerAs: "vm",
      controller: FilterableTableController,

    });


  /**
   * Hold the state of the filtering.
   */
  FilterableTableController.$inject = [ ];
  function FilterableTableController() {

    var vm = this;

    // Initial state.
    vm.filterText  = "";
    vm.inStockOnly = false;

  } // end FilterableTableController


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  /**
   * Provide the table grid for the filterableTable component.
   */
  angular
    .module( "app" )
    .component( "products", {

      bindings: {
        products:    "=",
        filterText:  "=",
        inStockOnly: "="
      },
      templateUrl: "components/products.html",

      controllerAs: "vm",
      controller: ProductsController,

    });

  ProductsController.$inject = [
    "$scope"
  ];
  function ProductsController( $scope ) {

    var vm  = this;

    // Break the products down in a collection of Categories,
    // each of which has a collection of products.
    vm.categories = [];

    // Keep watch on changes on the vm since we're doing a data-transformation.
    // When the products or the filter criteria changes, we must synchronize
    // the transformed structure.
    // --
    // NOTE: Watch configuration will set initial values.
    $scope.$watchCollection(
      function() {
        return [ vm.products, vm.filterText, vm.inStockOnly ];
      },
      function handleVmChange() {
        vm.categories = getFilteredProducts( vm.products,
                                             vm.filterText,
                                             vm.inStockOnly );
      }
    ); // end $watchCollection


    // ---
    // PRIVATE METHODS.
    // ---


    /**
     * @return the category breakdown for the given products after the given filtering has been applied.
     */
    function getFilteredProducts( products, filterText, inStockOnly ) {

      var categories = [];

      // Standardize on the lowercase text.
      filterText = filterText.toLowerCase();

      // Filter out the products that don't match the current criteria.
      var filtered = products.filter( function ( product ) {

        // 1. Filter based on text.
        if ( filterText &&
             product.name.toLowerCase().indexOf( filterText ) === -1 ) {

          return false;

        }

        // 2. Filter based on stock status.
        if ( inStockOnly && ! product.stocked ) {

          return false;

        }

        // This item has passed all the filtering criteria.
        return true;

      }); // end filter

      // Sort the filtered products by category.
      filtered = filtered.sort( function(a, b) {

        return a.category.localeCompare( b.category );

      });

      // Break the filtered products down into the different categories.
      // --
      // NOTE: Assume that products are sorted by category.
      var currentCategory = null;
      var categoryHolder  = {};

      // Iterate over the filtered products.
      filtered.forEach( function ( product ) {

        // Create a new category when an item with a different item is found.
        if ( product.category !== currentCategory ) {

          // Remember currently working category.
          currentCategory = product.category;

          // Initialize the categoryHolder with a new category name.
          categoryHolder = {
            name:     product.category,
            products: [ ]
          };

          // Add a new category to categories array.
          categories.push( categoryHolder );

        }

        // Push a product into current category's array.
        categoryHolder.products.push({
          name:    product.name,
          stocked: product.stocked,
          price:   product.price
        });

      }); // end forEach

      return categories;

    } // end getFilteredProducts

  } // end ProductsController

})()

/* Data structure of the categories array.
[
    [0] {
        :name     => "Electronics",
        :products => [
            [0] {
                   :name => "iPod Touch",
                :stocked => true,
                  :price => "99.99"
            },
            [1] {
                   :name => "iPhone 5",
                :stocked => false,
                  :price => "399.99"
            },
            [2] {
                   :name => "Nexus 7",
                :stocked => true,
                  :price => "199.99"
            }
        ]
    },
    [1] {
        :name     => "Sporting Goods",
        :products => [
            [0] {
                   :name => "Football",
                :stocked => true,
                  :price => "49.99"
            },
            [1] {
                   :name => "Baseball",
                :stocked => true,
                  :price => "9.99"
            },
            [2] {
                   :name => "Basketball",
                :stocked => false,
                  :price => "29.99"
            },
            [3] {
                   :name => "Portball",
                :stocked => true,
                  :price => "49.99"
            }
        ]
    }
]
 */
