(function() {

  // Module declaration.
  angular.module( "app", [ ] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .controller( "AppController", AppController );

  AppController.$inject = [ ];
  function AppController() {

    var vm = this;

    // Expose the products on the app that are fetched from API.
    vm.products = [
      { category: "Sporting Goods", price: "49.99", stocked: true, name: "Football" },
      { category: "Sporting Goods", price: "49.99", stocked: true, name: "Football" },
      { category: "Sporting Goods", price: "9.99", stocked: true, name: "Baseball" },
      { category: "Sporting Goods", price: "29.99", stocked: false, name: "Basketball" },
      { category: "Electronics", price: "99.99", stocked: true, name: "iPod Touch" },
      { category: "Electronics", price: "399.99", stocked: false, name: "iPhone 5" },
      { category: "Sporting Goods", price: "49.99", stocked: true, name: "Portball" },
      { category: "Electronics", price: "199.99", stocked: true, name: "Nexus 7"},
      { category: "Books", price: "49.99", stocked: true, name: "Ruby on Rails Tutorial" },
      { category: "Electronics", price: "49.99", stocked: true, name: "Kindle Fire 7"},
    ];

    // Remove dupulicates.
    vm.products = removeDuplicatesFromObjArray(vm.products, "name");

    /**
     * Usage: uniqueDishes = removeDuplicatesFromObjArray(products, "name");
     * @param  arr
     * @param  field
     * @return unique array.
     */
    function removeDuplicatesFromObjArray( arr, field ) {

      var uniq = [];
      arr.reduce( function ( a, b ) {
        if ( a[ field ] !== b[ field ] ) {
          uniq.push( b );
        } else {
          console.info( "Dupulicate removed: %s", a[ field ]);
        }
        return b;
      }, []);

      return uniq;

    } // end removeDuplicatesFromObjArray

  } // end AppController


})()
