angular.module("todoApp").directive("todoItem", function () {
  return {
    restrict: "E",
    scope: {
      todo: "<",
      onToggle: "&",
      removeTodo: "&",
    },
    controller: [
      "$scope",
      function ($scope) {
        console.log($scope);
      },
    ],
    templateUrl: "directives/todoItem.html",
  };
});
