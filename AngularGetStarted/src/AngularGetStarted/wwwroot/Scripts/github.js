(function () {
    var github = function ($http) {

        var getUser = function (userName) {
            return $http.get("https://api.github.com/users/" + userName)
            .then(function (response) { return response.data; });
        };

        var getRepos = function (user) {
            return  $http.get(user.repos_url)
                .then(function (response) { return response.data; });
        };

        var getIssuesCount = function (userName, repoName) {
            return $http.get("https://api.github.com/repos/" + userName + "/" + repoName)
            .then(function (response) { return response.data.open_issues_count; });
        };

        var getContributors = function (userName, repoName) {
            return $http.get("https://api.github.com/repos/" + userName + "/" + repoName + "/collaborators")
                        .then(function (response) { return response.data; });
        };

        return {
            getUser: getUser,
            getRepos: getRepos,
            getIssuesCount: getIssuesCount,
            getContributors: getContributors
        };
    };



    var mainAppModule = angular.module("mainApp");
    mainAppModule.factory('github', github);
}());