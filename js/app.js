/*
    app.js: main application script
    this is an Angular application
 */

"use strict";

//create bew angular module
angular.module('MovieApp',[])
    .controller('MoviesController', function($scope){
        $scope.movies = movies;
        $scope.searchString = '';
        $scope.sortCol = 'rank';
        $scope.sortReverse = false;

        $scope.sortBy = function(colName) {
            if($scope.sortCol == colName) {
                $scope.sortReverse = !$scope.sortReverse;
            }

            else {
                $scope.sortReverse = false;
            }

            $scope.sortCol = colName;
        };
    });