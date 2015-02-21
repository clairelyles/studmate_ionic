studmateApp.controller('CardsCtrl', function($scope, TDCardDelegate, $ionicSideMenuDelegate, $http) {

  $ionicSideMenuDelegate.canDragContent(false);

  $scope.loaded=false;

  $http.get("http://localhost:1337/api/stud").success(function(data) {
    var cardTypes = data;
    console.log(data);
    $scope.cards = Array.prototype.slice.call(cardTypes, 0);
    $scope.loaded=true;
  })

  // var cardTypes = [
  //   { id: 0, name: 'Rodioso', image: 'http://img.equinenow.com/equine/data/photos/963269_1.jpg' },
  //   { id: 1, name: 'Indy Bright', image: 'http://img.equinenow.com/equine/data/photos/420468_1.jpg' },
  //   { id: 2, name: 'Mo Breaking News', image: 'http://img.equinenow.com/equine/data/photos/645048_1.jpg' },
  //   { id: 3, name: 'Cazar', image: 'http://img.equinenow.com/equine/data/photos/805245_1.jpg'},
  //   { id: 4, name: 'Da Sir Dierich', image: 'http://img.equinenow.com/equine/data/photos/436486_1.jpg' }
  // ];
  // $scope.cards = Array.prototype.slice.call(cardTypes, 0);

  $scope.cardDestroyed = function(index, direction) {
    console.log(direction);
    $scope.cards.splice(index, 1);
  };

  $scope.cardSwipedLeft = function(index) {
    $scope.taco = 'LEFT';
    // $scope.addCard();
  };
  $scope.cardSwipedRight = function(index) {
    $scope.taco = 'RIGHT';
    // $scope.addCard();
  };

  $scope.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }

  $scope.onPartialSwipe = function(amt) {
    console.log("amount",amt);
  }

})