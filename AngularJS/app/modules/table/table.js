'use strict';

angular.module('myApp.table', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/table', {
    templateUrl: '../../modules/table/table.html',
    controller: 'TableCtrl'
  });
}])

.controller('TableCtrl', [
    '$scope',
    function($scope) {
      if (localStorage.getItem("items") === null) {
        $scope.items = [
          {
            id: 1,
            firstName: 'First Name 1',
            lastName: 'Last Name 1',
            isActive: true,
            show: false,
          },
          {
            id: 2,
            firstName: 'First Name 2',
            lastName: 'Last Name 2',
            isActive: false,
            show: false,
          },
        ];
        localStorage.setItem("items", JSON.stringify($scope.items));
      }else {
        $scope.items = JSON.parse(localStorage.getItem("items"));
        $scope.items = $scope.items.filter(function (item) {
          return item.firstName || item.lastName;
        });
        localStorage.setItem("items", JSON.stringify($scope.items));
      }
      $scope.add = function() {
        var itemsIds = $scope.items.map(function (item) {
          return item.id;
        });

        var newitem = {
          id: Math.max.apply(null,itemsIds) + 1,
          firstName: '',
          lastName: '',
          isActive: false,
          show: true,
        };
        $scope.items.push(newitem);
        localStorage.setItem("items", JSON.stringify($scope.items));
      };
      $scope.change = function(ind) {
        if (ind) {
          $scope.items[+ind].show = !($scope.items[+ind].show);
          localStorage.setItem("items", JSON.stringify($scope.items));
        }
      };
      $scope.delete = function(id) {
        $scope.items.splice(
            $scope.items.findIndex(function (el) {
              return +el.id === +id;
            }),
            1
        );
        localStorage.setItem("items", JSON.stringify($scope.items));
      };
    }
]).directive('tableRow', [function () {
      return {
        restrict: 'A',
        replace: true,
        scope: {
          item: '=',
          index: '@',
          change: '&',
          delete: '&',
        },
        templateUrl: '../../modules/table/table-row/table-row.html',
        controller: function ($scope) {
          $scope.onEditClick = function (index) {
            $scope.change({ index: index });
          };

          $scope.onDeleteClick = function (id) {
            $scope.delete({ id: id });
          };
        }
      };
    }
]);



