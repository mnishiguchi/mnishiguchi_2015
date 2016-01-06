describe( 'AppController', function() {

    var aCtrl;

    beforeEach( module( 'app' ) );

    beforeEach( inject( function( _$rootScope_, _$controller_ ) {

      // Simulate isolate scope variables from the directive if any.
      var data  = {};

      // Simulate scope.
      var scope = _$rootScope_.$new();

      // Create a controller.
      aCtrl = _$controller_('AppController', { $scope: scope }, data );

    }));

    it('should have hello property whose value is "world"', function() {
      expect( aCtrl.hello ).toBeDefined;
      expect( aCtrl.hello ).toBe( "world" );
      expect( aCtrl.hello ).not.toBe( "sekai" );
    });
});
