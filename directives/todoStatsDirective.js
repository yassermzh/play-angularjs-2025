function StatsController(TodoService) {
  this.getTotalTodos = function () {
    return TodoService.getTotalTodos();
  };

  this.getCompletedTodos = () => TodoService.getCompletedTodos();
}

const TodoStatsComponent = {
  templateUrl: "directives/todoStats.html",
  controller: StatsController,
};

export default TodoStatsComponent;
