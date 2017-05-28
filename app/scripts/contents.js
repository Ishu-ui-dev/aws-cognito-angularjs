'use strict';

angular.module('myApp').controller('ContentsCtrl', function ($scope, $location, cognitoService) {

    var userPool = cognitoService.getUserPool();

    var currentUser = userPool.getCurrentUser();

    console.log(currentUser);
});
