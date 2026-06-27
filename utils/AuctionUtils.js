class AuctionUtils {

    // Convert player name to uppercase
    static convertToUpperCase(player) {
        player.name = player.name.toUpperCase();
    }

    // Validate age
    static validateAge(player) {
        if (player.age >= 18) {
            return "Eligible for Auction";
        } else {
            return "Not Eligible for Auction";
        }
    }

    // Add auction price
    static addAuctionPrice(player, price) {
        player.auctionPrice = price;
    }
}

module.exports = AuctionUtils;
