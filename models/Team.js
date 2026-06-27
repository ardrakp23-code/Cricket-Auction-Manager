class Team {
    constructor(teamId, teamName) {
        this.teamId = teamId;
        this.teamName = teamName;
        this.players = [];
    }

    addPlayer(player) {
        this.players.push(player);
    }
}

module.exports = Team;