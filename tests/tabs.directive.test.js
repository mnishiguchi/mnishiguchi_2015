describe( "tabs", function() {

    var vm;

    beforeEach( module( 'app' ) );

    beforeEach( inject( function( _$rootScope_, _$controller_ ) {

      // Simulate isolate scope variables from the directive if any.
      var data  = { index: 0, };

      // Simulate scope.
      var scope = _$rootScope_.$new();

      // param-1: a controller name
      // param-2: all injected dependencies
      // param-3: isolate scope variables
      vm = _$controller_( 'TabsController', { $scope: scope }, data );

    }));

    describe( "vm", function() {

      it( "should have vm.paths", function() {
        expect( vm.paths ).toBeDefined();
      });
      it( "should have vm.labels", function() {
        expect( vm.labels ).toBeDefined();
      });
      it( "should have vm.activeTab", function() {
        expect( vm.activeTab ).toBeDefined();
      });

    });

    // describe( "vm.isActive", function() {

    //   it( "should tell whether the specified tab is active or not", function() {
    //     expect( vm.isActive(0) ).toBe( true );
    //     expect( vm.isActive(1) ).toBe( false );
    //   });

    // });
    // describe( "vm.getTabName", function() {

    //   it( "should return a correct tab name", function() {
    //     expect( vm.getTabName(0) ).toBe( "About me" );
    //     expect( vm.getTabName(1) ).not.toBe( "About me" );
    //   });

    // });
    // describe( "vm.getRoute", function() {

    //   it( "should return a correct route", function() {
    //     expect( vm.getRoute(0) ).toBe( "#/" );
    //     expect( vm.getRoute(4) ).not.toBe( "#/blog" );
    //   });

    // });
    // describe( "vm.setTab", function() {

    //   it( "should set a tab to specified index", function() {
    //     expect( vm.index ).toBe( 0 );
    //     vm.setTab(4);
    //     expect( vm.index ).toBe( 4 );
    //     vm.setTab(2);
    //     expect( vm.index ).toBe( 2 );
    //   });

    // });
});
