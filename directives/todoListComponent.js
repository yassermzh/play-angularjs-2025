function TodoListController(TodoService) {
  this.todos = TodoService.getTodos();

  this.newTodoText = "";

  this.addTodo = function () {
    console.log("addTodo");
    if (this.newTodoText) {
      TodoService.addTodo(this.newTodoText);
      this.newTodoText = "";
    }
  };

  this.removeTodo = function (index) {
    TodoService.removeTodo(index);
  };

  this.markAsComplete = function (index) {
    TodoService.markAsComplete(index);
    this.todos = TodoService.getTodos();
  };
}

angular.module("todoApp").component("todoList", {
  template: `
    <h2>My Todos</h2>
    <input type="text" ng-model="$ctrl.newTodoText" placeholder="Add new todo" />
    <button ng-click="$ctrl.addTodo()">Add</button>
    <ul>
      <li ng-repeat="todo in $ctrl.todos" ng-class="{ completed: todo.done }">
        <todo-item
          todo="todo"
          on-toggle="$ctrl.markAsComplete($index)"
          remove-todo="$ctrl.removeTodo($index)"
        ></todo-item>
      </li>
    </ul>
  `,
  controller: TodoListController,
});
