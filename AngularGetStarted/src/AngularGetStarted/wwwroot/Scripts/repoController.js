(function () {
    'use strict';

    var repoController = function ($scope, github, $routeParams) {

        var onGetIssues = function (data) {
            $scope.issuesCount = data;
        };

        var onGetContributors = function (data) {
            $scope.contributors = data;
        };

        var onError = function () {
            $scope.error = "Cannot get data";
        };

        $scope.userName = $routeParams.userName;
        $scope.repoName = $routeParams.repoName;
        github.getIssuesCount($scope.userName, $scope.repoName).then(onGetIssues, onError);
        github.getContributors($scope.userName, $scope.repoName).then(onGetContributors, onError);
    }

    angular.module('mainApp').controller('repoController', ['$scope', "github", "$routeParams", repoController]);
}());
