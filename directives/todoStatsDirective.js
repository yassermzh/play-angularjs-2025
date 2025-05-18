function StatsController(TodoService) {
  this.getTotalTodos = function () {
    return TodoService.getTotalTodos();
  };

  this.getCompletedTodos = () => TodoService.getCompletedTodos();
}

angular.module("todoApp").component("todoStats", {
  template: `
    <div>
      <p>You have {{ $ctrl.getTotalTodos() }} todos</p>
      <p>You have {{ $ctrl.getCompletedTodos() }} completed todos</p>
    </div>
    `,
  controller: StatsController,
});
