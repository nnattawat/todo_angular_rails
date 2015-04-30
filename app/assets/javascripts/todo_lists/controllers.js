'use strict';

var todoControllers = angular.module('todoControllers', [
  'todoServices'
]);

todoControllers.controller('TodoListsController', ['$scope', 'TodoList', function ($scope, TodoList) {
  $scope.todoLists = TodoList.query();
  $scope.todoList = new TodoList();

  $scope.addTodoList = function() {
    $scope.todoList.$save(function(data) {
      $scope.todoList = new TodoList();
      $scope.todoLists.push(new TodoList(data.toJSON()));
    }, function(error) {
      console.log(error)
      alert(error.data.join(' and '));
    });
  };

  $scope.remove = function(todoList) {
    todoList.$delete(function() {
      $scope.todoLists = TodoList.query();
    });
  };
}]);

todoControllers.controller('TodoListItemsController', ['$scope', '$routeParams', 'TodoList', 'TodoListItem', function ($scope, $routeParams, TodoList, TodoListItem) {
  $scope.orderProp = 'created_at';
  $scope.todoListItems = TodoListItem.query({ todo_list_id: $routeParams.todoListId });
  $scope.todoList = TodoList.get({ id: $routeParams.todoListId });
  $scope.todoListItem = new TodoListItem({ todo_list_id: $routeParams.todoListId });

  $scope.addTodoItem = function() {
    $scope.todoListItem.completed = false;
    $scope.todoListItem.$save(function(data) {
      $scope.todoListItem = new TodoListItem({ todo_list_id: $routeParams.todoListId });
      $scope.todoListItems.push(new TodoListItem(data.toJSON()));
    }, function(error) {
      console.log(error)
      alert(error.data.join(' and '));
    });
  };

  $scope.remove = function(todoListItem) {
    todoListItem.$delete(function() {
      $scope.todoListItems = TodoListItem.query({ todo_list_id: $routeParams.todoListId });
    });
  };

  $scope.complete = function(todoListItem, status) {
    todoListItem.completed = status;
    todoListItem.$update();
  };
}]);