/**
 * app.layout
 */
(function() {

  angular
    .module( "app" )
    .component( "appHeader", {

      templateUrl: "app/layout/appHeader.html",
      controller: AppHeaderController, // as appHeader

    });

  angular
    .module( "app" )
    .controller( "AppHeaderController", AppHeaderController );

  AppHeaderController.$inject = [ ];
  function AppHeaderController() {

    var vm  = this;

    // Initial state.
    vm.css = {};

    // Expose the public methods.
    vm.changeBackground = changeBackground;

    // Set the initial header color.
    vm.changeBackground();


    /**
     * Change a navbar's background color with a random color.
     */
    function changeBackground() {

      vm.css[ "backgroundColor" ] = getRandomRGBA();

    }


    /**
     * Generate an random RGBA string.
     * @return an RGBA string. e.g., rgba(100, 50, 25, 0.5)
     */
    function getRandomRGBA() {

      var red   = Math.floor( Math.random() * 255 );
      var green = Math.floor( Math.random() * 255 );
      var blue  = Math.floor( Math.random() * 255 );

      return 'rgba(' + red + ',' + green + ',' + blue + ',0.5)';

    }

  } // end AppHeaderController


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .component( "appFooter", {

      templateUrl: "app/layout/appFooter.html"

    });


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .component( "tabs", {

      bindings: {
        index: "="
      },
      templateUrl: 'app/layout/tabs.html',
      controller:  TabsController, // as tabs

    });

  angular
    .module( "app" )
    .controller( "TabsController", TabsController );

  TabsController.$inject = [];

  function TabsController() {

    var vm  = this;

    // Initial state.
    vm.tabNames = [
      "About me",
      "Background",
      "Projects",
      "Blog",
      "Contact"
    ];

    vm.routes = [
      "#/",
      "#/background",
      "#/projects",
      "#/blog",
      "#/contact",
    ]

    // Expose the public methods.
    vm.isActive   = function(index) { return (vm.index === index); };

  } // end TabsController

})();
