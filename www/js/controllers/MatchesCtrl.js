studmateApp.controller('MatchesCtrl', ['$rootScope','$scope', '$http', '$ionicSideMenuDelegate', 'UserService', function($rootScope, $scope, $http, $ionicSideMenuDelegate, UserService) {
  $ionicSideMenuDelegate.canDragContent(false);


  // Watches if the user adds new studs from the "Browse.html" page
  //   var userId = UserService.currentUser.id;

  // $scope.updateMatches = $http.get("http://studmateapp.herokuapp.com/api/user/"+userId)
  //   .success(function(data) {
  //     $scope.studData = data.studs;
  //     $scope.userData = UserService.currentUser;
  //   }).error(function(err) {
  //     console.log("There was an error with the match: ", err);
  //   });
  // $scope.$watchCollection('updateMatches', function(data) {
  //   $scope.studData = data.studs;
  // });

  console.log('this is the matches ctrl')

  var userId = UserService.currentUser.id;


  var reloadMatches = function(){
    $http.get("http://studmateapp.herokuapp.com/api/user/"+userId)
      .success(function(data) {
        $scope.studs = data.studs;
        $scope.userData = UserService.currentUser;
      }).error(function(err) {
        console.log("There was an error with the match: ", err);
      })
  }

  $scope.contact = function(studData) {
    // console.log(studData);
    alert("Contact "+studData.ownerName+" at "+studData.phoneNumber)
  }

  $rootScope.$on('$stateChangeSuccess',
  function(event, toState, toParams, fromState, fromParams){
    if(toState.url=='/matches'){
      reloadMatches();
    }
  })

  reloadMatches();

}]);