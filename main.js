/**
 * Get icons blinking.
 */
$(document).ready( function() {

  // Blinking eyes
  setInterval(function() {
      $('.flashing').fadeOut(1000).fadeIn(1000);
  }, 2000);

});


// ----------------------------------------------------------------------- //
// ----------------------------------------------------------------------- //


/**
 * The main Augular module for this website.
 */
(function() {

  // Module declaration.
  angular
    .module( "app", [ ] );


  // --------------------------------------------------------------------- //
  // --------------------------------------------------------------------- //


  angular
    .module( "app" )
    .controller( "AppController", AppController );

  AppController.$inject = [ ];
  function AppController() {

    vm = this;

    // Initial state.
    vm.demos = [];

    // Load demo data.
    vm.demos = loadDemoData( demos );


    /**
     * Load JSON array of demos, generate demoUrl and githubUrl for each demo
     * based on my convention, and add each demo data the generated urls.
     * @param demos A JSON array of demo info.
     */
    function loadDemoData( demos ) {

      var extendedWithUrls = _.map(demos, function(demo) {

        var githubBaseUrl = "https://github.com/mnishiguchi/mnishiguchi.github.io/tree/master/demos/";

        // Generate urls based on my convention and create an object with them.
        var urls = {
          demoUrl:   [ "demos/", demo.name, "/index.html" ].join(""),
          githubUrl: [ githubBaseUrl, demo.name, "/index.html" ].join(""),
        }

        // Extend each demo object with urls.
        return _.extend({}, demo, urls);

      });

      return extendedWithUrls;

    } // loadDemoData

  } // end AppController


  // ---
  // DEMO DATA
  // - Here we register demos to be displayed in the list.
  // ---


  var demos = [
      {
        name: "binding_events",
        type: "Angular",
        desc: "",
      },
      {
        name: "bookstore",
        type: "Angular",
        desc: "",
      },
      {
        name: "filterable_table",
        type: "Angular",
        desc: "",
      },
      {
        name: "gemstore",
        type: "Angular",
        desc: "",
      },
      {
        name: "multi_transclude",
        type: "Angular",
        desc: "",
      },
      {
        name: "dynamic_tabs",
        type: "Angular",
        desc: "",
      },
      {
        name: "toggling_buttons",
        type: "Angular",
        desc: "",
      },
      {
        name: "list_slider",
        type: "HTML/CSS/JS",
        desc: "",
      },
    ];

})(); // end module
