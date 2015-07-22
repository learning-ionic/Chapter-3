// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('view1', {
            url: '/view1',
            template: '<div class="padding"><h2>View 1</h2><button class="button button-positive" ui-sref="view2">To View 2</button></div>'
        })
        .state('view2', {
            url: '/view2',
            template: '<div class="padding"><h2>View 2</h2><button class="button button-assertive" ui-sref="view1">To View 1</button></div>'
        })

    $urlRouterProvider.otherwise('/view1');

})
