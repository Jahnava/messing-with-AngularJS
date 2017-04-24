app.controller('MainController',
['$scope', function($scope) {
  $scope.title = 'Jahnava\'s Awesome Title';
  $scope.promo = 'I\'m promoting happiness and a hopeful journey of discovery';
  $scope.products= [
        {
          name: 'A compass to inspire a willingness to persevere through the adversities of learning angularjs. Choosing direction doesn\'t come with a pricetag ',
          price: 0,
          pubdate: new Date('2017','03','23'),
          cover: '/images/compass.gif',
          likes: 0
        },
        {
          name: 'Don\'t forget to breath',
          price: 0,
          pubdate: new Date('2017', '03', '23'),
          cover: 'images/peace.gif',
          likes: 0
        },
        {
          name: 'Don\'t forget to breath',
          price: 0,
          pubdate: new Date('2013', '03', '23'),
          cover: 'images/peace.gif',
          likes: 0
        },
        {
          name: 'Don\'t forget to breath',
          price: 0,
          pubdate: new Date('2015', '03', '23'),
          cover: 'images/peace.gif',
          likes: 0
        }
        ];
        // makes the likes counter go up
        $scope.plusOne = function(index) {
          $scope.products[index].likes += 1;
        };
     }]);
