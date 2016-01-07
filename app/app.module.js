/**
 * The main Augular module for this website.
 */
(function() {

  // Module declaration.
  angular
    .module( "app", [ "ngRoute", "ngMessages" ] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .controller( "AppController", AppController );

  AppController.$inject = [ ];
  function AppController() {
    // Sanity check.
    this.hello = "world";
    this.ossu  = "sekai";
  }

})();
