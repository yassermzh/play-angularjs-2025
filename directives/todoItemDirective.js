angular.module("todoApp").directive("todoItem", function () {
  return {
    restrict: "E",
    scope: {
      todo: "<",
      onToggle: "&",
      removeTodo: "&",
    },
    controller: function ($scope) {
      console.log($scope);
    },
    templateUrl: "directives/todoItem.html",
  };
});
