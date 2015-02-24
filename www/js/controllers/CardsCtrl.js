studmateApp.controller('CardsCtrl', ['$scope', 'TDCardDelegate', '$ionicSideMenuDelegate', '$http', 'UserService', function($scope, TDCardDelegate, $ionicSideMenuDelegate, $http, UserService) {

  $ionicSideMenuDelegate.canDragContent(false);

  $scope.loaded=false;

  $http.get("http://studmateapp.herokuapp.com/api/stud")
    .success(function(data) {
      var cardTypes = data;
      console.log("cardTypes is loading:"+data);
      $scope.cards = Array.prototype.slice.call(cardTypes, 0);
      $scope.loaded=true;
  })

  $scope.cardDestroyed = function(index, dir) {
    $scope.cards.splice(index, 1);
    console.log("the index was: "+index+" and the dir was: "+dir)

    if (dir == "RIGHT") {

      $http.get("http://studmateapp.herokuapp.com/api/user/"+UserService.currentUser.id+"/studs/add/"+index)
        .success(function(data) {
          console.log("match DID work!!!!!!!"+data)
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