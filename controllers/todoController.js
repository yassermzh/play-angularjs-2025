angular
  .module("todoApp")
  .controller("TodoController", function (TodoService, $scope) {
    $scope.todos = TodoService.getTodos();

    $scope.newTodoText = "";

    $scope.addTodo = function () {
      console.log("addTodo");
      if ($scope.newTodoText) {
        TodoService.addTodo($scope.newTodoText);
        $scope.newTodoText = "";
      }
    };

    $scope.removeTodo = function (index) {
      TodoService.removeTodo(index);
    };

    $scope.markAsComplete = function (index) {
      TodoService.markAsComplete(index);
      $scope.todos = TodoService.getTodos();
    };
  });
