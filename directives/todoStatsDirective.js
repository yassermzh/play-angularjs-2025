angular.module("todoApp").directive("todoStats", function () {
  return {
    restrict: "E",
    template: `
    <div>
      <p>You have {{ getTotalTodos() }} todos</p>
      <p>You have {{ getCompletedTodos() }} completed todos</p>
    </div>
    `,
    scope: {},
    // controller: "StatsController",
    controller: function (TodoService, $scope) {
      $scope.getTotalTodos = function () {
        return TodoService.getTotalTodos();
      };
      $scope.getCompletedTodos = function () {
        return TodoService.getCompletedTodos();
      };
    },
  };
});
