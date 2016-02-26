

var app = angular.module("expenseManager", []);

app.controller("transactions", function ($scope, $http) {
    $http.get('http://localhost:1000/js/data.json').success(function (data) {
        $scope.transactions = data;

    });
});


