/**
 * app.config
 */
(function() {

  // Module declaration.
  angular
    .module( "app", [
      "ngRoute",
      "ngMessages"
    ]);


  // ------------------------------------------------------- //
  // ------------------------------------------------------- //


  angular
    .module( "app" )
    .config( config )
    .run( run );

  config.$inject = [
    "$routeProvider"
  ];

  function config( $routeProvider ) {

    $routeProvider

      .when("/", {
          title:       "About me",
          templateUrl: "app/partials/about.html"
      })
      .when("/background", {
          title:       "Background",
          templateUrl: "app/partials/background.html"
      })
      .when("/projects", {
          title:       "Projects",
          templateUrl: "app/partials/projects.html"
      })
      .when("/blog", {
          title:       "Blog",
          templateUrl: "app/partials/blog.html",
          controllerAs: "blog",
          controller:  "BlogController",
          resolve:     BlogController.resolve
      })
      .when("/contact", {
          title:       "Contact",
          templateUrl: "app/partials/contact.html"
      })
      .otherwise({
          redirectTo: "/"
      });

  } // end config


  run.$inject = [
    "$rootScope",  // To pass data to tabs.
    "$route",      // To access route data.
    "$window"      // To access window.document
  ];

  function run( $rootScope, $route, $window ) {

    var baseTitle = " | Masatoshi Nishiguchi";

    $rootScope.$on( "$routeChangeSuccess", function() {

      // Set page title.
      if ( $route.current.title ) {
        $window.document.title = $route.current.title + baseTitle;
      }

    });

  } // end run


  // ------------------------------------------------------- //
  // ------------------------------------------------------- //


  angular
    .module( "app" )
    .controller( "BlogController", BlogController );

    BlogController.resolve = {
      _blogPosts: function( BlogService ) { return BlogService.getData(); }
    };

    BlogController.$inject = [
      "_blogPosts"
    ];

    function BlogController( _blogPosts ) {

      this.posts = _blogPosts;

    } // end BlogController


  // ------------------------------------------------------- //
  // ------------------------------------------------------- //


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
      vm.css = {
        "backgroundColor": "rgba(0,0,0,1);"
      };

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


  // ------------------------------------------------------- //
  // ------------------------------------------------------- //


  angular
    .module( "app" )
    .component( "appFooter", {

      templateUrl: "app/layout/appFooter.html"

    });


  // ------------------------------------------------------- //
  // ------------------------------------------------------- //


  angular
    .module( "app" )
    .component( "tabs", {

      bindings: {},
      templateUrl: 'app/layout/tabs.html',
      controller:  TabsController, // as tabs

    });

  angular
    .module( "app" )
    .controller( "TabsController", TabsController );

    TabsController.$inject = [
      "$route",
      "$location"
    ];

    function TabsController( $route, $location ) {

      var vm  = this;

      vm.paths     = [];  // The "#" paths, e.g., "#/about".
      vm.labels    = [];  // The same as the page title.
      vm.activeTab = "";  // The name of the active tab.

      // Rejects trailing slash.
      var pathRegex = /^\/\w*[^\/]$/;

      // Extracts a list of paths and labels from routes info.
      angular.forEach( $route.routes, function( value, key ) {

        // If a valid path name is found, push to the lists.
        if ( key == "/" || key.match( pathRegex ) ) {
          vm.paths.push( "#" + key );
          vm.labels.push( value.title );

          // If the current path is found, remember the title as a active tab.
          if ( key == $location.path() ) {
            vm.activeTab = value.title;
          }
        }

      }); // end angular.forEach

    } // end TabsController

})();
