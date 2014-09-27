'use strict';

/**
 * @ngdoc function
 * @name tstApp.controller:Gridctrl
 * @description
 * # FormBuilderCtrl
 * Controller of the tstApp
 */
angular.module('tstApp')
  .controller('GridCtrl', ['$scope', 'setCurrPage', function ($scope, setCurrPage) {
    setCurrPage(7);

    $scope.mySelections = [];

    $scope.myData = [{name: "Moroni", age: 50, gender: true},
                     {name: "Tiancum", age: 43, gender: false},
                     {name: "Jacob", age: 27, gender: true},
                     {name: "Nephi", age: 29, gender: true},
                     {name: "Enos", age: 34, gender: true},
                     {name: "Heidi", age: 88, gender: false},
                     {name: "Craig", age: 87, gender: true},
                     {name: "Daniel", age: 103, gender: true}];

    $scope.gridOptions = {
        data: 'myData',
        columnDefs: [ {field:'name', displayName:'姓名', enableCellEdit: false},
                      {field:'age', displayName:'年龄', enableCellEdit: true, cellTemplate: '/views/template/cellTemplate.html'},
                      {field:'gender', displayName:'性别', enableCellEdit: true, editableCellTemplate: '/views/template/cellTemplate_ctrl.html'} ],

        showGroupPanel: true,

        selectedItems: $scope.mySelections,

        enableRowSelection: true,
        multiSelect: false,

        enableCellSelection: true,
        // enableCellEditOnFocus: true,
        enableCellEdit: true,


        enableColumnResize: true,
        enableColumnReordering: true
    };

    $scope.toggle = function(name, value) {
      //do something usefull here, you have the name and the new value of dude. Write it to a db or else.
      alert(name + ':' + value);
    }


// new cell
    $scope.gridOptions2 = {
        data: 'myData2',
        enablePinning: true,
        columnDefs: [{ field: "name", width: 120, pinned: true },
                    { field: "age", width: 120 },
                    { field: "birthday", width: 120 },
                    { field: "salary", width: 120 }],
        enableColumnResize: true,
        enableColumnReordering: true,
        showColumnMenu: true,
        showFilter: true
    };

    $scope.myData2 = [{ name: "Moroni", age: 50, birthday: "Oct 28, 1970", salary: "60,000" },
                    { name: "Tiancum", age: 43, birthday: "Feb 12, 1985", salary: "70,000" },
                    { name: "Jacob", age: 27, birthday: "Aug 23, 1983", salary: "50,000" },
                    { name: "Nephi", age: 29, birthday: "May 31, 2010", salary: "40,000" },
                    { name: "Enos", age: 34, birthday: "Aug 3, 2008", salary: "30,000" },
                    { name: "Moroni", age: 50, birthday: "Oct 28, 1970", salary: "60,000" },
                    { name: "Tiancum", age: 43, birthday: "Feb 12, 1985", salary: "70,000" },
                    { name: "Jacob", age: 27, birthday: "Aug 23, 1983", salary: "40,000" },
                    { name: "Nephi", age: 29, birthday: "May 31, 2010", salary: "50,000" },
                    { name: "Enos", age: 34, birthday: "Aug 3, 2008", salary: "30,000" },
                    { name: "Moroni", age: 50, birthday: "Oct 28, 1970", salary: "60,000" },
                    { name: "Tiancum", age: 43, birthday: "Feb 12, 1985", salary: "70,000" },
                    { name: "Jacob", age: 27, birthday: "Aug 23, 1983", salary: "40,000" },
                    { name: "Nephi", age: 29, birthday: "May 31, 2010", salary: "50,000" },
                    { name: "Enos", age: 34, birthday: "Aug 3, 2008", salary: "30,000" }];


  }]);
