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

const TodoListComponent = {
  templateUrl: "directives/todoList.html",
  controller: TodoListController,
};

export default TodoListComponent;
