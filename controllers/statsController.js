angular.module("todoApp").controller("StatsController", [
  "TodoService",
  "$scope",
  function (TodoService, $scope) {
    $scope.getTotalTodos = function () {
      return TodoService.getTotalTodos();
    };
    $scope.getCompletedTodos = () => TodoService.getCompletedTodos();
  },
]);
