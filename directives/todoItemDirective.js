function TodoItemController() {
  console.log("controller");
}

const TodoItemComponent = {
  bindings: {
    todo: "<",
    onToggle: "&",
    removeTodo: "&",
  },
  controller: TodoItemController,
  templateUrl: "directives/todoItem.html",
};

export default TodoItemComponent;
