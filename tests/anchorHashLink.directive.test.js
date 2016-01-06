describe( "anchorHashLink", function() {

    var scope;

    beforeEach( module( 'app' ) );

    beforeEach( inject( function( _$rootScope_,
                                  _$controller_ ) {

      // Simulate isolate scope variables from the directive if any.
      var data  = { };

      // Simulate scope.
      scope = _$rootScope_.$new();

      // Create a controller.
      // - param-1: controller name
      // - param-2: all injected dependencies
      // - param-3: isolate scope variables
      var ctrl = _$controller_( 'AnchorHashLinkController', { $scope: scope }, data );

    }));

    describe( "Public methods", function() {

      it( "should have vm.isActive", function() {
        expect( scope.scrollTo ).toBeDefined();
      });

    });

});



// describe( 'anchorHashLink', function() {

//     var scope;
//     var $rootScope;
//     var $compile;

//     beforeEach( module( 'app' ) );

//     // beforeEach(function() {
//     //   spyOn(ons, 'isWebView').and.returnValue(true);
//     // });

//     beforeEach( inject( function( _$rootScope_, _$compile_ ) {

//       $rootScope = _$rootScope_;
//       $compile   = _$compile_;
//       scope      = $rootScope.$new();

//     }));

//     it('', function() {
//       var element = angular.element('<anchor-hash-link></anchor-hash-link>');
//       var link = $compile(element);
//       link(scope);
//       scope.$digest();
//       // expect(element.text()).toEqual('太郎');
//       // scope.setName('花子');
//       // scope.$digest();
//       // expect(element.text()).toEqual('花子');
//     });

// });
