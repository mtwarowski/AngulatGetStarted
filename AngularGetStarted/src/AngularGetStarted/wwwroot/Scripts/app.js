//(function () {
//     angular.module("mainApp", [])
//     .controller('mainController', function ($scope, $http) {

//         var onUserComplete = function (responce) {
//             $scope.user = responce.data;
//         };

//         var onError = function (reson) {
//             $scope.error = "Could not fetch the user.";
//         }

//         $http.get("https://api.github.com/users/mtwarowski")
//         .then(onUserComplete, onError);

//         $scope.message = "Hello from Ctrl";
//     });

//}());

(function () {
    var app = angular.module("mainApp", []);
    var mainCtrl = function ($scope, $http, $interval, $log, $ancherScroll, $location) {

        var onUserComplete = function (responce) {
            $scope.user = responce.data;
            
            $http.get($scope.user.repos_url)
                .then(onRepos, onError);
        };

        var onRepos = function (responce) {
            $scope.repos = responce.data;
            $location.hash("userDetails");
            $ancherScroll();
        };

        var onError = function (reson) {
            $scope.error = "Could not fetch the data.";
        }

        var decrementCountdown = function(){
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.userName);
            }
        };

        var countdownInterval = null;
        var startCountdown = function () {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.search = function (userName) {
            if (countdownInterval){
                $interval.cancel(countdownInterval);
                $scope.countdown = 0;
            }

            $log.info("Searching for " + userName);
            $http.get("https://api.github.com/users/" + userName)
            .then(onUserComplete, onError);

        };

        $scope.userName = "mtwarowski";
        $scope.message = "GitHub Viewer";
        $scope.repoSortOrder = "+id";
        $scope.countdown = 5;

        startCountdown();
    };


    //protection from minifier
    app.controller('mainController', ["$scope", "$http", "$interval", "$log",
                                        "$anchorScroll", "$location", mainCtrl]);

}());