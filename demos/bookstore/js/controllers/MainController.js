app.controller('MainController', ['$scope', function($scope) {

  $scope.title = 'Some Ruby on Rails books';
  $scope.promo = 'Check out these books to be a better Rails developer';
  $scope.products = [
      {
        name: 'Ruby on Rails Tutorial',
        price: 30,
        pubdate: new Date('2015', '05', '09'),
        cover: 'http://ecx.images-amazon.com/images/I/51qiS5gf-HL._SX337_BO1,204,203,200_.jpg',
        likes: 0,
        dislikes: 0,
        url: 'https://www.railstutorial.org/'
      },
      {
        name: 'Rails in Action',
        price: 40,
        pubdate: new Date('2015', '09', '19'),
        cover: 'http://ecx.images-amazon.com/images/I/51-nLwEJZfL._SX397_BO1,204,203,200_.jpg',
        likes: 0,
        dislikes: 0,
        url: 'http://www.amazon.com/Rails-4-Action-Ryan-Bigg/dp/1617291099'
      },
      {
        name: 'Rails 4 way',
        price: 35,
        pubdate: new Date('2014', '06', '08'),
        cover: 'http://ecx.images-amazon.com/images/I/51X4nf0-thL._SX322_BO1,204,203,200_.jpg',
        likes: 0,
        dislikes: 0,
        url: 'http://www.amazon.com/Rails-Edition-Addison-Wesley-Professional-Series/dp/0321944275'
      },
      {
        name: 'Agile Web Development with Rails 4 (Facets of Ruby)',
        price: 28,
        pubdate: new Date('2013', '10', '11'),
        cover: 'http://ecx.images-amazon.com/images/I/51ETr-3MB1L._SX396_BO1,204,203,200_.jpg',
        likes: 0,
        dislikes: 0,
        url: 'http://www.amazon.com/Agile-Development-Rails-Facets-Ruby/dp/1937785564'
      }
  ];
  $scope.likeOne = function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.dislikeOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
}]);
