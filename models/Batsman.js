const Player = require("./Player");

class Batsman extends Player {
    constructor(
        id,
        name,
        age,
        role,
        basePrice,
        soldPrice,
        isSold,
        runs,
        centuries,
        strikeRate
    ) {
        super(id, name, age, role, basePrice, soldPrice, isSold);

        this.runs = runs;
        this.centuries = centuries;
        this.strikeRate = strikeRate;
    }

    showBattingStats() {
        console.log(`
Name: ${this.name}
Runs: ${this.runs}
Centuries: ${this.centuries}
Strike Rate: ${this.strikeRate}
        `);
    }
}

module.exports = Batsman;