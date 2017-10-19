var app = angular.module("7w", []);

app.controller("7wController", function($scope) {
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
});

// Create Players

// Create Positions

// Create Cards

// Create Gold

// Create Tokens

// Create Civilizations