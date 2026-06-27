class Player {
    constructor(id, name, age, role, basePrice, soldPrice, isSold) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.role = role;
        this.basePrice = basePrice;
        this.soldPrice = soldPrice;
        this.isSold = isSold;
    }

    showDetails() {
        console.log(`
ID: ${this.id}
Name: ${this.name}
Age: ${this.age}
Role: ${this.role}
Base Price: ${this.basePrice}
Sold Price: ${this.soldPrice}
Sold Status: ${this.isSold}
        `);
    }
}

module.exports = Player;