studmateApp.controller('AppCtrl', ['$scope', '$http', '$ionicModal', '$ionicSideMenuDelegate', '$timeout', 'UserService', '$location', function($scope, $http, $ionicModal, $ionicSideMenuDelegate, $timeout, UserService, $location) {

  $scope.UserService = UserService;
  $scope.$watchCollection('UserService', function() {
    $scope.currentUser = UserService.currentUser;
  });

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $timeout(function(){
    $ionicSideMenuDelegate.canDragContent(false);
  })

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.openLogin = function() {
    $scope.modal.show();
  };

  // Performs login action when the user submits the login form
  $scope.loginInfo = {email: '', password: ''};
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginInfo);
      UserService.login($scope.loginInfo.email, $scope.loginInfo.password,
      function(err, data) {
        if (err) {
          alert(err);
        } else if (data.user) {
          $scope.closeLogin();
          $location.path('/app/browse');
        } else {
          alert(data.error)
        }
      });
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
  $scope.openSignup = function() {
    $scope.modal2.show();
  };

  // Perform the login action when the user submits the login form
  $scope.signupInfo = {firstName: '', lastName: '', email: '', zip: '', password: '', passwordConfirmation:''};
  $scope.doSignup = function() {
    console.log('Doing Signup', $scope.signupInfo);
    if ($scope.signupInfo.password != $scope.signupInfo.passwordConfirmation) {
      alert('Passwords do not match. Please try again.');
      return;
    }
    var signupData = {
      email: $scope.signupInfo.email,
      password: $scope.signupInfo.password,
      firstName: $scope.signupInfo.firstName,
      lastName: $scope.signupInfo.lastName,
      zip: $scope.signupInfo.zip
    }
    $http.post('http://localhost:1337/api/user', signupData)
      .success(function(data) {
        $scope.modal2.hide();
        $scope.modal.show();
        console.log('You are signed in.');
      }).error(function(err) {
        alert(err);
      })
  };

  $scope.logout = function() {
    // connects to UserService where we define the deletion of the session
    UserService.logout(function(err,data) {

    })
  }


}])