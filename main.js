var app = angular.module("7w", []);

app.controller("7wController", ['$scope', '$http', function($scope, $http) {
    $scope.user = "John";
    $scope.numberPlayers = 3;
    console.log($scope);
    
    $scope.getNumber = function(num) {
    return new Array(num);   
}
    $scope.buildGame = function(players){
        $scope.players = [];
        for (var i = 0, len = players; i < len; i++)
        {
            var player = {}
            player.number = i+1;
            player.civ;
            player.gold;
            player.victories;
            player.losses;
            player.wonders;
            player.cards = [];
            $scope.players.push(player);
            
        }
    }
    
    $http.get('civs.json')
        .then(function(data) {
            $scope.civs = data;
        });
    $http.get('cards.json')
        .then(function(data) {
            $scope.cards = [];
            var option;
            angular.forEach(data.colors, function(cards, name){
                option = {};
                angular.forEach(cards, function(card){
                    card.group = name;
                    $scope.cards.push(card);
                });
            });
        });
}]);

// Create Players

// Create Positions

// Create Cards

// Create Gold

// Create Tokens

// Create Civilizations