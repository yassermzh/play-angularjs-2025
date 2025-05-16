angular
  .module("todoApp")
  .controller("StatsController", function ($rootScope, $scope) {
    $scope.totalTodos = 1;
    $scope.completedTodos = 0;

    // We'll need a way to update these stats when the todos in
    // TodoController change. For now, we'll just initialize them.
    $rootScope.$on("todosUpdated", function (event, todos) {
      console.log("todosUpdated");
      $scope.totalTodos = todos.length;
      $scope.completedTodos = todos.filter(function (todo) {
        return todo.done;
      }).length;
    });
  });
