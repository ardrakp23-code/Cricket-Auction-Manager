const players = require("./testdata");
const Team = require("./models/Team");
const AuctionUtils = require("./utils/AuctionUtils");

// console.log("Players Loaded Successfully");
// console.log("Total Players:", players.length);

// Create Teams
const teamA = new Team(1, "Team A");
const teamB = new Team(2, "Team B");

// console.log("\nTeams Created Successfully");

// Assign Players to Teams
for (let i = 0; i < 5; i++) {
    players[i].team = "Team A";
    teamA.addPlayer(players[i]);
}

for (let i = 5; i < players.length; i++) {
    players[i].team = "Team B";
    teamB.addPlayer(players[i]);
}

// Team A
// console.log("\n===== Team A =====");
// teamA.players.forEach(player => {
//     console.log(player.name);
// });

// Team B
// console.log("\n===== Team B =====");
// teamB.players.forEach(player => {
//     console.log(player.name);
// });

// Apply AuctionUtil file
players.forEach(player => {
    AuctionUtils.convertToUpperCase(player);

    if (AuctionUtils.validateAge(player)) {
        AuctionUtils.addAuctionPrice(player, player.basePrice + 1000);
    }
});

// Final Auction List
console.log("\n===== Final Auction List =====");

players.forEach(player => {
    console.log(
        `ID: ${player.id} 
        Name: ${player.name} 
        Age: ${player.age} 
        Role: ${player.role} 
        Team: ${player.team}  
        Base Price: ${player.basePrice}
        Auction Price: ${player.auctionPrice}`
    );
});