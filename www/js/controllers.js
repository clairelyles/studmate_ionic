angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicSideMenuDelegate, $timeout) {

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $timeout(function(){
    $ionicSideMenuDelegate.canDragContent(false);
  })
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $ionicModal.fromTemplateUrl('templates/signup.html', {
    scope: $scope
  }).then(function(modal2) {
    $scope.modal2 = modal2;
  });

  // Triggered in the login modal to close it
  $scope.closeSignup = function() {
    $scope.modal2.hide();
  };

  // Open the login modal
  $scope.signup = function() {
    $scope.modal2.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doSignup = function() {
    console.log('Doing Signup', $scope.signupData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeSignup();
    }, 1000);
  };


})

.controller('HorsesCtrl', function($scope, $ionicSideMenuDelegate) {
  $ionicSideMenuDelegate.canDragContent(false);

  $scope.horses = [
    { name: 'Rodioso', image: 'http://img.equinenow.com/equine/data/photos/963269_5.jpg' },
    { name: 'Indy Bright', image: 'http://img.equinenow.com/equine/data/photos/420468_1.jpg' },
    { name: 'Mo Breaking News', image: 'http://img.equinenow.com/equine/data/photos/645048_1.jpg' },
    { name: 'Cazar', image: 'http://img.equinenow.com/equine/data/photos/805245_1.jpg'},
    { name: 'Da Sir Dierich', image: 'http://img.equinenow.com/equine/data/photos/436486_1.jpg' }
  ];
})

.controller('HorseCtrl', function($scope, $stateParams) {

})

.controller('CardsCtrl', function($scope, TDCardDelegate, $ionicSideMenuDelegate) {
  $ionicSideMenuDelegate.canDragContent(false);

  console.log('CARDS CTRL');
  var cardTypes = [
    { name: 'Rodioso', image: 'http://img.equinenow.com/equine/data/photos/963269_5.jpg' },
    { name: 'Indy Bright', image: 'http://img.equinenow.com/equine/data/photos/420468_1.jpg' },
    { name: 'Mo Breaking News', image: 'http://img.equinenow.com/equine/data/photos/645048_1.jpg' },
    { name: 'Cazar', image: 'http://img.equinenow.com/equine/data/photos/805245_1.jpg'},
    { name: 'Da Sir Dierich', image: 'http://img.equinenow.com/equine/data/photos/436486_1.jpg' }
  ];

  $scope.cards = Array.prototype.slice.call(cardTypes, 0);

  $scope.cardDestroyed = function(index) {
    // alert("destroyed");
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

.controller('CardCtrl', function($scope, TDCardDelegate) {
  $scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
    $scope.addCard();
  };
  $scope.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE');
    $scope.addCard();
  };
});

