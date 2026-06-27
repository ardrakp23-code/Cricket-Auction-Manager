const Player = require("./Players");

class Bowler extends Player {
    constructor(
        id,
        name,
        age,
        role,
        basePrice,
        soldPrice,
        isSold,
        wickets,
        economy
    ) {
        super(id, name, age, role, basePrice, soldPrice, isSold);

        this.wickets = wickets;
        this.economy = economy;
    }

    showBowlingStats() {
        console.log(`
Name: ${this.name}
Wickets: ${this.wickets}
Economy: ${this.economy}
        `);
    }
}

module.exports = Bowler;