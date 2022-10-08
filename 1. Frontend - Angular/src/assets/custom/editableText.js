var app = angular.module("App", []);

app.controller('contentController', ['$scope', function($scope) {
  $scope.text01 = 'Click here to edit the text.';
  $scope.text02 = 'You will need to click the button to enable content editing before you can change this text.';
  $scope.editmode = false;
  $scope.toggleEditMode = function(){
    $scope.editmode = $scope.editmode === false ? true: false;
  }
}]);

app.directive("contenteditable", function() {
  return {
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {

      function read() {
        ngModel.$setViewValue(element.html());
      }

      ngModel.$render = function() {
        element.html(ngModel.$viewValue || "");
      };

      element.bind("blur keyup change", function() {
        scope.$apply(read);
      });
    }
  };
});