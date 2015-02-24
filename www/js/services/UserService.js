studmateApp.factory('UserService', ['$http', function($http) {

  return {

    login: function(email, password, callback) {
      var self = this;
      var loginData = { email: email, password: password };
      $http.post('http://studmateapp.herokuapp.com/api/auth', loginData)
        .success(function(data) {
          if (data && data.user) {
            self.currentUser = data.user
            console.log("THIS WORKED");
          } else {
            self.currentUser = false;
            console.log("THIS DIDNT WORK");
          }
          callback(null, data);
        }).error(function(err) {
          callback(err);
        })
    },
    logout: function(callback) {
      var self = this;
      $http.delete('http://studmateapp.herokuapp.com/api/auth')
        .success(function(data) {
          console.log('user logged out')
          self.currentUser = false;
          callback(null, data);
        }).error(function(err) {
          console.log('user not logged out')
          callback(err);
        })
    },
    check: function(callback) {
      var self = this;
      $http.get('http://studmateapp.herokuapp.com/api/auth')
        .success(function(data) {
          if (data & data.user) {
            self.currentUser = data.user
          } else {
            self.currentUser = false;
          }
          callback(null, data);
        }).error(function(err) {
          callback(err);
        })
    }

  }


}]);