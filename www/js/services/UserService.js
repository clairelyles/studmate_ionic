studmateApp.factory('UserService', ['$http', function($http) {

  return {

    login: function(email, password, callback) {
      var self = this;
      var loginData = { email: email, password: password };
      $http.post('http://localhost:1337/api/auth', loginData)
        .success(function(data) {
          if (data && data.user) {
            self.currentUser = data.user
          } else {
            self.currentUser = false;
          }
            callback(null, data);
        }).error(function(err) {
          callback(err);
        })
    },
    logout: function(callback) {
      var self = this;
      $http.delete('http://localhost:1337/api/auth')
        .success(function(data) {
          self.currentUser = false;
          callback(null, data);
        }).error(function(err) {
          callback(err);
        })
    },
    check: function(callback) {
      var self = this;
      $http.get('http://localhost:1337/api/auth')
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