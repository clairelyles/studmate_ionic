studmateApp.controller('CardsCtrl', ['$scope', 'TDCardDelegate', '$ionicSideMenuDelegate', '$http', 'UserService', function($scope, TDCardDelegate, $ionicSideMenuDelegate, $http, UserService) {

  $ionicSideMenuDelegate.canDragContent(false);

  $scope.loaded=false;

  $http.get("http://localhost:1337/api/stud")
    .success(function(data) {
      var cardTypes = data;
      console.log("cardTypes is loading:"+data);
      $scope.cards = Array.prototype.slice.call(cardTypes, 0);
      $scope.loaded=true;
  })

  $scope.cardDestroyed = function(index, dir) {
    $scope.cards.splice(index, 1);

    if (dir == "RIGHT") {
      var req = {
        method: 'POST',
        url: "http://localhost:1337/api/stud",
        data: {
          user: UserService.currentUser.id,
          stud: index
        }
      };
      $http(req)
        .success(function(data) {
          console.log("match DID work!!!!!!!")
        }).error(function(err) {
          console.log("There was a match error:"+err)
        });
    };

  };

  // Left is NEIGH or No
  $scope.cardSwipedLeft = function(index) {
    $scope.dir = 'LEFT';
    }

   // Left is YAY or yes
  $scope.cardSwipedRight = function(index) {
    $scope.dir = 'RIGHT';
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

}])