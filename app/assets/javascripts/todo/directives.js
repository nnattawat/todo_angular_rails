'use strict';

var todoDirectives = angular.module('todoDirectives', []);

todoDirectives.directive("newTodo", function() {
  return {
    restrict: 'E',
    templateUrl: "templates/todo/new-todo.html",
    controller: function($scope) {
      $scope.addState = false;
    }
  };
});