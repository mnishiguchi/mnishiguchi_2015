describe( "appHeader", function() {

    var vm;

    beforeEach( module( 'app' ) );

    beforeEach( inject( function( _$rootScope_, _$controller_ ) {

      // Simulate isolate scope variables from the directive if any.
      var data  = {};

      // Simulate scope.
      var scope = _$rootScope_.$new();

      // param-1: a controller name
      // param-2: all injected dependencies
      // param-3: isolate scope variables
      vm = _$controller_( 'AppHeaderController', { $scope: scope }, data );

    }));

    describe( "vm", function() {

      it( "should have vm.css", function() {
        expect( vm.css ).toBeDefined();
      });
      it( "should have vm.changeBackground", function() {
        expect( vm.changeBackground ).toBeDefined();
      });

    });

    describe( "vm.css", function() {

      it( "should have an initial backgroundColor", function() {
        expect( vm.css[ "backgroundColor" ] ).toMatch( "rgba" );
      });

    });

    describe( "vm.changeBackground", function() {

      it( "should assign new color to backgroundColor", function() {
        // Before
        var prev = vm.css[ "backgroundColor" ];
        expect( vm.css[ "backgroundColor" ] ).toBe( prev );
        // After
        vm.changeBackground();
        expect( vm.css[ "backgroundColor" ] ).not.toBe( prev );
      });

    });
});
