studmateApp.controller('MatchesCtrl', ['$scope', '$http', '$ionicSideMenuDelegate', 'UserService', function($scope, $http, $ionicSideMenuDelegate, UserService) {
  $ionicSideMenuDelegate.canDragContent(false);

  var userId = UserService.currentUser.id;
  // console.log("current user: ",userId);
  $http.get("http://localhost:1337/api/user/"+userId)
    .success(function(data) {
      $scope.userData = data.studs;
      // console.log("USER & FAVORITE DATA: ");
    })

}]);