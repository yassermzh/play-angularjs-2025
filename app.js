import TodoService from "./services/todoService.js";
import TodoItemComponent from "./directives/todoItemDirective.js";
import TodoListComponent from "./directives/todoListComponent.js";
import TodoStatsComponent from "./directives/todoStatsDirective.js";

angular.module("todoApp", []);

angular
  .module("todoApp")
  .service("TodoService", TodoService)
  .component("todoItem", TodoItemComponent)
  .component("todoList", TodoListComponent)
  .component("todoStats", TodoStatsComponent);
