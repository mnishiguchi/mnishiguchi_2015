describe( 'routes', function () {

    it( 'should map routes to controllers and templates correctly', function() {

      module( 'app' );

      inject( function( $route ) {

        var rtes, path;

        rtes = $route.routes;

        path = '/';
        expect( rtes[ path ].title )       .toBe( 'About me' );
        expect( rtes[ path ].controller )  .toBe( 'PageController as page' );
        expect( rtes[ path ].templateUrl ) .toBe( 'app/partials/about_me.html' );

        path = '/background';
        expect( rtes[ path ].title )       .toBe( 'Background' );
        expect( rtes[ path ].controller )  .toBe( 'PageController as page' );
        expect( rtes[ path ].templateUrl ) .toBe( 'app/partials/background.html' );

        path = '/projects';
        expect( rtes[ path ].title )       .toBe( 'Projects' );
        expect( rtes[ path ].controller )  .toBe( 'PageController as page' );
        expect( rtes[ path ].templateUrl ) .toBe('app/partials/projects.html' );

        path = '/blog';
        expect( rtes[ path ].title )       .toBe( 'Blog' );
        expect( rtes[ path ].controller )  .toBe( 'BlogController as page' );
        expect( rtes[ path ].templateUrl ) .toBe('app/partials/blog.html' );

        path = '/resources';
        expect( rtes[ path ].title )       .toBe( 'Resources' );
        expect( rtes[ path ].controller )  .toBe( 'PageController as page' );
        expect( rtes[ path ].templateUrl ) .toBe('app/partials/resources.html' );

        path = '/contact';
        expect( rtes[ path ].title )       .toBe( 'Contact' );
        expect( rtes[ path ].controller )  .toBe( 'PageController as page' );
        expect( rtes[ path ].templateUrl ) .toBe( 'app/partials/contact.html' );

        // Otherwise redirect to
        expect( rtes[ null ].redirectTo)   .toBe( '/' );
      });
    });
});
