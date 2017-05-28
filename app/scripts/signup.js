'use strict';

angular.module('myApp').controller('SignupCtrl', function ($scope, $location, cognitoService) {

  $scope.submit = function () {
    var userPool = cognitoService.getUserPool();

    var nameParam = {
      Name: 'name',
      Value: $('#name').val()
    };

    var emailParam = {
      Name: 'email',
      Value: $('#email').val()
    };

    var attributes = cognitoService.getUserAttributes(nameParam, emailParam);

    userPool.signUp($('#email').val(), $('#password').val(), attributes, null, function (err, result) {
      if (err) {
        console.log(err);

        // TODO: 生のエラー情報は表示させない方が良いが、機能確認のため、画面に表示。
        $scope.errorMessage = err.message;
        $scope.$apply();
        return;
      } else {
        console.log(result);

        $location.path('/activate');
        $scope.$apply();
      }
    });

    return false;
  }

});
