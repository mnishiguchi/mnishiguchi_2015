xdescribe( 'movieSearch', function() {

  var vm;

  // Stub object for a response from MovieDataService.
  var response = {
        Title : "Curb Your Enthusiasm",
         Year : "1999–",
        Rated : "TV-MA",
     Released : "15 Oct 2000",
      Runtime : "28 min",
        Genre : "Comedy",
     Director : "N/A",
       Writer : "Larry David",
       Actors : "Larry David, Jeff Garlin, Cheryl Hines, Susie Essman",
         Plot : "He's got it all: a loving wife, good friends, a successful career, a great home...what could possibly go wrong for Larry David? Seinfeld co-creator Larry David stars as himself in this hilarious, off-kilter comedy series that presents an unflinching, self-deprecating depiction of his life.",
     Language : "English",
      Country : "USA",
       Awards : "Won 1 Golden Globe. Another 19 wins & 100 nominations.",
       Poster : "http://ia.media-imdb.com/images/M/MV5BMjIwMjk4MDQ0MF5BMl5BanBnXkFtZTcwNTM3MTU4Mg@@._V1_SX300.jpg",
    Metascore : "N/A",
   imdbRating : "8.7",
    imdbVotes : "61,993",
       imdbID : "tt0264235",
         Type : "series",
     Response : "True"
  };


  beforeEach( module( 'app' ) );

  beforeEach( inject( function( _$rootScope_, _$controller_, _MovieDataService_ ) {

    // Get service.
    MovieDataService = _MovieDataService_;

    // Simulate isolate scope variables from the directive if any.
    var data  = {};

    // Simulate scope.
    var scope = _$rootScope_.$new();

    // param-1: a controller name
    // param-2: all injected dependencies
    // param-3: isolate scope variables
    vm = _$controller_( 'MovieSearchController', { $scope: scope }, data );

  }));


  describe( 'MovieDataService.getData', function() {

    it( "should have access to MovieDataService.getData", function() {
      expect( MovieDataService.getData ).toBeDefined();
    });

  });

  describe( 'vm', function() {

    it( "should have all the required members", function() {
      expect( vm.loading ).toBeDefined();
      expect( vm.movieInfo ).toBeDefined();
      expect( vm.searchKey ).toBeDefined();
      expect( vm.topID ).toBeDefined();
      expect( vm.getData ).toBeDefined();
      expect( vm.clearData ).toBeDefined();
    });

  });

  describe( 'vm.loading', function() {

    it( "should tell whether loading or not", function() {
      expect( vm.loading ).toBe( false );
      vm.getData("some title");
      expect( vm.loading ).toBe( true );
    });

  });
  describe( 'vm.movieInfo', function() {

    it( "should be {} by default", function() {
      expect( vm.movieInfo ).toEqual( {} );
    });

  });
  describe( 'vm.searchKey', function() {

    it( "should be empty by default", function() {
      expect( vm.searchKey ).toBe( "" );
    });

  });
  describe( 'vm.topID', function() {

    it( "should be 'main-container'", function() {
      expect( vm.topID ).toBe( "main-container" );
    });

  });
  describe( 'vm.getData', function() {

    // Not to be tested here.

  });
  describe( 'vm.clearData', function() {

    it( "should clear data", function() {
      // Before
      vm.searchKey = "some title";
      vm.movieInfo = response;
      expect( vm.searchKey ).not.toEqual( "" );
      expect( vm.movieInfo ).not.toEqual( {} );
      // After
      vm.clearData()
      expect( vm.searchKey ).toEqual( "" );
      expect( vm.movieInfo ).toEqual( {} );
    });

  });
});
