export default function () {
  var todos = [
    { text: "Learn AngularJS 1", done: true },
    { text: "Build a todo app", done: false },
  ];

  this.getTodos = function () {
    return todos;
  };

  this.addTodo = function (text) {
    if (text) {
      todos.push({ text: text, done: false });
    }
  };

  this.removeTodo = function (index) {
    todos.splice(index, 1);
  };

  this.markAsComplete = function (index) {
    console.log("service", index, todos);
    if (todos[index]) {
      console.log("service to toggle", index, todos[index]);
      todos[index].done = !todos[index].done;
    }
  };

  this.getTotalTodos = function () {
    return todos.length;
  };

  this.getCompletedTodos = function () {
    return todos.filter(function (todo) {
      return todo.done;
    }).length;
  };
}
