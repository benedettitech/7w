var app = angular.module("7w", []);

app.controller("7wController", ['$scope', '$http', function($scope, $http) {
    $scope.user = "John";
    $scope.numberPlayers = 3;
    console.log($scope);
    
    $scope.bool = [
    {value: false, label: 'false'},
    {value: true, label: 'true'}
        ];
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
    
    $scope.addCard = function(player,card){
        $scope.players[player].cards.push(card);
    }
    
    // Create Civilizations
    
    $http.get('./resources/civs.json')
        .then(function(data) {
            $scope.civs = data.data.civs;
        });
    
    // Create Cards
    
    $http.get('./resources/cards.json')
        .then(function(data) {
            $scope.cards = data.data.cards;
        });
}]);

