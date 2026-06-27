const Player = require("./Players");

class AllRounder extends Player {
    constructor(
        id,
        name,
        age,
        role,
        basePrice,
        soldPrice,
        isSold,
        runs,
        wickets
    ) {
        super(
            id,
            name,
            age,
            role,
            basePrice,
            soldPrice,
            isSold
        );

        this.runs = runs;
        this.wickets = wickets;
    }

    showStats() {
        console.log(`
Name: ${this.name}
Runs: ${this.runs}
Wickets: ${this.wickets}
        `);
    }
}

module.exports = AllRounder;