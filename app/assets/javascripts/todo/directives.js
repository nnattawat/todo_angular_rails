'use strict';

var todoDirectives = angular.module('todoDirectives', []);

todoDirectives.directive("newTodoForm", function() {
  return {
    restrict: 'E',
    templateUrl: "templates/todo/new-todo-form.html"
  };
});