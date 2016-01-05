(function() {

  // Module declaration.
  var app = angular.module( "app", [ "ngSanitize" ] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  app.controller( "AppController", AppController );

  AppController.$inject = [
    "$sce"  // To parse HTML string.
  ];
  function AppController( $sce ) {

    this.contents = [];

    // Data for tabs and contents.
    // This can be loaded from a service.
    this.contents = contents;
  }

  var contents = [

    {
      title: "AngularJS",
      body: [
        "<a href='https://angularjs.org/'>[documentation]</a>",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Voluptate, ipsa. Veritatis, distinctio porro amet eius recusandae.",
        "Ex accusamus, praesentium? Necessitatibus ad quae quaerat quibusdam quisquam reprehenderit atque ut quasi mollitia?",
      ].join(""),
    },
    {
      title: "Angular2",
      body: "<a href='https://angular.io/'>[documentation]</a>"
    },
    {
      title: "ReactJS",
      body: "<a href='https://facebook.github.io/react/'>[documentation]</a>"
    },
    {
      title: "Ruby on Rails",
      body: "<a href='http://rubyonrails.org/'>[documentation]</a>"
    },
    {
      title: "Sinatra",
      body: "<a href='http://www.sinatrarb.com/'>[documentation]</a>"
    },

  ]


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  app.component( "dynamicTabs", {

    bindings: {},
    templateUrl: 'dynamic_tabs.html',

    controllerAs: "vm",
    controller: DynamicTabsController,

  });

  DynamicTabsController.$inject = [ ];
  function DynamicTabsController() {

    var vm    = this;

    // Initial state.
    vm.panes = [ ];  // To hold the registered panes.

    // Expose the public methods.
    vm.setSelected = setSelected;
    vm.addPane     = addPane;


    // ---
    // PUBLIC METHODS.
    // ---


    // I update the selected tab and pane.
    function setSelected( pane ) {

      // Set all the panes to the "not selected" state.
      angular.forEach( vm.panes, function( each ) {

        each.selected = false;

      });

      // Set the specified pane to the "selected" state.
      pane.selected = true;

    }


    /**
     * Register a pane.
     * @param pane
     */
    function addPane( pane ) {

      // Select the first tab when the page is loaded.
      if (vm.panes.length === 0) {
        vm.setSelected( pane );
      }

      // Add the specified pane to the list.
      vm.panes.push( pane );

    }

  }


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  /**
   * contentPane
   * - Only one selected pane will be displayed at a time.
   * - Transcluded into DynamicTabs directive.
   * --
   * REQUIREMENTS:
   * - The DynamicTabs directive as a parent.
   * - The title attribute must be passed in.
   * e.g., <content-pane title="World tab"></content-pane>
   */
  app.directive( "contentPane", contentPane );

  function contentPane() {

    var directive = {
      require: "^dynamicTabs",  // Mix in tabs directive's controller.

      restrict: "E",
      transclude: true,
      scope: {
        title: "@"  // Require a title prop and bind it to this scope.
      },
      template: '<ng-transclude ng-show="selected"></ng-transclude>',
      link: link,
    };

    /**
     * Every time a new contentPane is created, it will be registered in
     * the DynamicTabs component's list.
     */
    function link( scope, element, attrs, tabsCtrl ) {

      tabsCtrl.addPane( scope );  // Call tabs's addPane function.

    }

    // NOTE: When a directive requires a controller, its link function receives
    // that controller as the fourth argument.
    // Taking advantage of this, contentPane can call the addPane function of tabs.

    return directive;

  }

})();
