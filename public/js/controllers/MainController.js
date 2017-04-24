app.controller('MainController',
['$scope', function($scope) {
  $scope.title = 'Jahnava\'s Awesome Title';
  $scope.promo = 'I\'m promoting happiness and a hopeful journey of discovery';
  $scope.products= [
        {
          name: 'A compass to inspire a willingness to persevere through the adversities of learning angularjs. Choosing direction does\'nt come with a pricetag ',
          price: 0,
          pubdate: new Date('2017','03','23'),
          cover: '/images/compass.gif'
        },
        {
          name: 'love letters to god',
          price: 0,
          pubdate: new Date('2017', '03', '23'),
          cover: 'images/peace.gif'
        }
        ];

     }]);
