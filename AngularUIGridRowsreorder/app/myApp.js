'use strict';

(function () {
    angular.module('myApp',
       ['ui.bootstrap',
           'ui.grid',
           'ui.grid.draggable-rows'
       ])
.controller('gridContoller', ['$scope',
       function ($scope) {
           $scope.gridOptions = {
               enableColumnMenus: false,
               enableSorting: false,
               rowTemplate: '<div grid="grid" class="ui-grid-draggable-row" draggable="true">\
                        <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader, \'custom\': true }" ui-grid-cell></div>\
                        </div>',
               useUiGridDraggableRowsHandle: true,

               columnDefs: [
           {
               name: 'name', width: "80%"
           }, {
               name: 'age', width: "20%",
           }]
           };

           $scope.gridOptions.onRegisterApi = function (gridApi) {
               gridApi.draggableRows.on.rowDropped($scope, function (info, dropTarget, scope) {
                   alert('Dropped');
               })
           };
           $scope.myData = [{ name: "Moroni", age: 50 },
                   { name: "Tiancum", age: 43 },
                   { name: "Jacob", age: 27 },
                   { name: "Nephi", age: 29 },
                   { name: "Enos", age: 34 }];

           $scope.gridOptions.data = $scope.myData;
       }])
})();
