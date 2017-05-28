'use strict';

var app = angular.module('myApp', [
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
      .state('login', {
        url: '/login',
        parent: 'base',
        title: 'Login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        parent: 'base',
        title: 'Sign Up',
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .state('activate', {
        url: '/activate',
        parent: 'base',
        title: 'Activate',
        templateUrl: 'views/activate.html',
        controller: 'ActivateCtrl'
      })
      .state('contents', {
        url: '/contents',
        title: 'Contents',
        templateUrl: 'views/contents.html',
        controller: 'ContentsCtrl'
      });
  });

app.service('cognitoService', function () {

  // Region
  AWS.config.region = 'us-east-2';
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
  });

  // Cognito User Pool Id
  AWSCognito.config.region = 'us-east-2';
  AWSCognito.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
  });

  this.getUserPool = function () {
    var poolData = {
      UserPoolId: 'us-east-2_xxxxxxxxx',
      ClientId: 'xxxxxxxxxxxxxxxxxxxxxxxxxx'
    };
    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
    return userPool;
  };

  this.getUser = function (userPool, username) {
    var userData = {
      Username: username,
      Pool: userPool
    };
    var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
    return cognitoUser;
  };

  this.getAuthenticationDetails = function (username, password) {
    var authenticationData = {
      Username: username,
      Password: password
    };
    var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
    return authenticationDetails;
  };

  this.getUserAttributes = function () {
    var attributes = [];
    for (var i = 0; i < arguments.length; i++) {
      var attr = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(arguments[i]);
      attributes.push(attr);
    }
    return attributes;
  };

});
