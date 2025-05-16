angular.module("todoApp").controller("TodoController", function ($scope) {
  $scope.todos = [
    { text: "Learn AngularJS 1", done: true },
    { text: "Build a todo app", done: false },
  ];

  $scope.newTodoText = "";

  $scope.addTodo = function () {
    if ($scope.newTodoText) {
      $scope.todos.push({ text: $scope.newTodoText, done: false });
      $scope.newTodoText = "";
      $scope.$broadcast("todosUpdated", $scope.todos); // Broadcast an event
    }
  };

  $scope.removeTodo = function (index) {
    $scope.todos.splice(index, 1);
    $scope.$broadcast("todosUpdated", $scope.todos); // Broadcast an event
  };
});
