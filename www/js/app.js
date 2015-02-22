var studmateApp = angular.module('studmateApp', ['ionic', 'ionic.contrib.ui.tinderCards']);

studmateApp.run(['$ionicPlatform', 'UserService', function($ionicPlatform, UserService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

   UserService.check(function(err, data) {
    console.log('check',err,data)
  });

}])

studmateApp.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})

studmateApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.landing', {
      url: "/welcome",
      views: {
        'menuContent': {
          templateUrl: "templates/landing.html",
          controller: 'LandingCtrl'
        }
      }
    })

    .state('app.about', {
      url: "/about",
      views: {
        'menuContent': {
          templateUrl: "templates/about.html"
        }
      }
    })

    .state('app.matches', {
      url: "/matches",
      views: {
        'menuContent': {
          templateUrl: "templates/matches.html",
          controller: 'HorsesCtrl'
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent': {
          templateUrl: "templates/browse.html",
          controller: "CardsCtrl"
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/welcome');
});
