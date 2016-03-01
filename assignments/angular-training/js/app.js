

var app = angular.module("expenseManager", []);

app.controller("transactions", function ($scope, $http) {
    //$http.get('http://localhost:1000/js/data.json').success(function (data) {
    //    $scope.transactions = data;
    //});
    
    
    $scope.transactions = {
        transactions: [{
            "id": 1,
            "payer": "Gretchen Hunter",
            "payee": "Isabel Saunders",
            "amount": "$100.00",
            "date": "December 17, 2015",
            "modeOfPayment": "Cash",
            "notes": "Dinner Cash",
            "type": "Income"
        }, {
                "id": 2,
                "payer": "Isabel Saunders",
                "payee": "Caroline Adkins",
                "amount": "$50.00",
                "date": "December 28, 2015",
                "modeOfPayment": "Electronic Transfer",
                "notes": "Money Owed",
                "type": "Expense"
            }, {
                "id": 3,
                "payer": "Isabel Saunders",
                "payee": "Wall-E Mart Inc.",
                "amount": "$280.00",
                "date": "December 31, 2015",
                "modeOfPayment": "Credit Card",
                "notes": "New Year's Gift",
                "type": "Expense"
            }, {
                "id": 4,
                "payer": "Marian Floyd",
                "payee": "Isabel Saunders",
                "amount": "$98.00",
                "date": "January 04, 2016",
                "modeOfPayment": "Cash",
                "notes": "Dinner Share",
                "type": "Income"
            }, {
                "id": 5,
                "payer": "Random Inc.",
                "payee": "Isabel Saunders",
                "amount": "$2500.00",
                "date": "January 04, 2016",
                "modeOfPayment": "Electronic Transfer",
                "notes": "Salary",
                "type": "Income"
            }],
        selected: {}
    };


    $scope.getTemplate = function (post) {
        if (post.id === $scope.transactions.selected.id) return 'edit';
        else return 'display';
    };

    $scope.editContact = function (post) {
        $scope.transactions.selected = angular.copy(post);
    };

    $scope.saveContact = function (idx) {
        console.log("Saving contact");
        $scope.transactions.transactions[idx] = angular.copy($scope.transactions.selected);
        $scope.reset();
    };

    $scope.reset = function () {
        $scope.transactions.selected = {};
    };


    $scope.items = [];

    $scope.itemsToAdd = [{
        payer: '',
        payee: '',
        amount: '',
        date: '',
        modeOfPayment: '',
        notes: '',
        type: ''
    }];

    $scope.add = function (itemToAdd) {

        var index = $scope.itemsToAdd.indexOf(itemToAdd);

        $scope.itemsToAdd.splice(index, 1);

        $scope.items.push(angular.copy(itemToAdd));
    };

    $scope.addNew = function () {

        $scope.itemsToAdd.push({
            payer: '',
            payee: '',
            amount: '',
            date: '',
            modeOfPayment: '',
            notes: '',
            type: ''
        });
    };

});


