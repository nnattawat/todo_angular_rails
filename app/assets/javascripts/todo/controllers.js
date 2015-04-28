'use strict';

var todoControllers = angular.module('todoControllers', [
  'todoServices'
]);

todoControllers.controller('TodoItemsController', ['$scope', 'TodoItems', 'TodoItem',
  function ($scope, TodoItems, TodoItem) {

    $scope.todoItems = TodoItems.query();
    $scope.orderProp = 'created_at';

    $scope.addTodoItem = function() {
      $scope.todo.completed = false;
      TodoItems.create({todo_item: $scope.todo}, function( data ){
        $scope.hideForm();
        $scope.todoItems.push(data.toJSON());
      }, function(error){
        console.log(error)
        alert(error.data.join(' and '));
      });
    };

    $scope.remove = function(todo) {
      if (confirm("Are you sure?")) {
        TodoItem.delete({ id: todo.id }, function(){
          $scope.todoItems = TodoItems.query();   // after deleted, fetch collection.
        });
      }
    };

    $scope.showForm = function() {
      angular.element('#new-todo').hide();
      angular.element('#new-todo-form').show();
    };

    $scope.hideForm = function() {
      angular.element('#new-todo').show();
      angular.element('#new-todo-form').hide();
      angular.element('#new-todo-form input').val('');
    }

  }]);

todoControllers.controller('TodoItemController', ['$scope', '$routeParams', 'TodoItem',
  function ($scope, $routeParams, TodoItem) {

    $scope.todo = TodoItem.get({ id: $routeParams.todoId }, function(todo) {
    });

    $scope.completeTodoItem = function() {
      $scope.todo.completed = true;
      TodoItem.update({ id: $scope.todo.id, todo_item: $scope.todo }, function(){
      });
    };

  }]);