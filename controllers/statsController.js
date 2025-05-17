angular
  .module("todoApp")
  .controller("StatsController", function (TodoService, $scope) {
    $scope.getTotalTodos = function () {
      return TodoService.getTotalTodos();
    };
    $scope.getCompletedTodos = () => TodoService.getCompletedTodos();
  });
