'use strict';

var todoControllers = angular.module('todoControllers', [
  'todoServices'
]);

todoControllers.controller('TodoItemsController', ['$scope', 'TodoItem',
  function ($scope, TodoItem) {

    $scope.todoItems = TodoItem.query();
    $scope.orderProp = 'created_at';
    $scope.todo = new TodoItem();

    $scope.addTodoItem = function() {
      $scope.todo.completed = false;
      $scope.todo.$save(function(data) {
        $scope.todo = new TodoItem();
        $scope.todoItems.push(new TodoItem(data.toJSON()));
      }, function(error) {
        console.log(error)
        alert(error.data.join(' and '));
      });
    };

    $scope.remove = function(todo) {
      todo.$delete(function() {
        $scope.todoItems = TodoItem.query();   // after deleted, fetch collection.
      });
    };

  }]);

todoControllers.controller('TodoItemController', ['$scope', '$routeParams', 'TodoItem',
  function ($scope, $routeParams, TodoItem) {

    $scope.todo = TodoItem.get({ id: $routeParams.todoId });

    $scope.completeTodoItem = function() {
      $scope.todo.completed = true;
      $scope.todo.$update();
    };

  }]);