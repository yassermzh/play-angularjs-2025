angular
  .module("todoApp")
  .controller("TodoController", function ($rootScope, $scope) {
    $scope.todos = [
      { text: "Learn AngularJS 1", done: true },
      { text: "Build a todo app", done: false },
    ];

    $scope.newTodoText = "";

    $scope.addTodo = function () {
      console.log("addTodo");
      if ($scope.newTodoText) {
        $scope.todos.push({ text: $scope.newTodoText, done: false });
        $scope.newTodoText = "";
        $rootScope.$broadcast("todosUpdated", $scope.todos); // Broadcast an event
      }
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
      $rootScope.$broadcast("todosUpdated", $scope.todos); // Broadcast an event
    };
  });
