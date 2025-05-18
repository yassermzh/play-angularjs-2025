function TodoItemController() {
  console.log("controller");
}

angular.module("todoApp").component("todoItem", {
  bindings: {
    todo: "<",
    onToggle: "&",
    removeTodo: "&",
  },
  controller: TodoItemController,
  templateUrl: "directives/todoItem.html",
});
