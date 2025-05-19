function TodoItemController() {
  this.isConfirmDialogOpen = false;
  this.showConfirmDialog = function () {
    this.isConfirmDialogOpen = true;
  };
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
