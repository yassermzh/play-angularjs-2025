angular.module("todoApp").controller("StatsController", function ($scope) {
  $scope.totalTodos = 0;
  $scope.completedTodos = 0;

  // We'll need a way to update these stats when the todos in
  // TodoController change. For now, we'll just initialize them.
});
