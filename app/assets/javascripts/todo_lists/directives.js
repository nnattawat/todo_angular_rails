'use strict';

var todoDirectives = angular.module('todoDirectives', []);

todoDirectives.directive("newTodoListItem", function() {
  return {
    restrict: 'E',
    templateUrl: "templates/todo_list_items/new-todo-list-item.html",
    controller: function($scope) {
      $scope.addState = false;
    }
  };
});

todoDirectives.directive("newTodoList", function() {
  return {
    restrict: 'E',
    templateUrl: "templates/todo_lists/new-todo-list.html"
  };
});