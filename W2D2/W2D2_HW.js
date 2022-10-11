class Football {
    constructor(city, team, wins, loses) {
        this.city = city;
        this.team = team;
        this.wins = wins;
        this.loses = loses
    }
    play() {
        this.playing = true;
        console.log('playing...')
    }
    run() {
        this.running = false;
        console.log('running...')
    }
    pass() {
        this.passing = false;
        console.log('passing...')
    }
}

const team1 = new Football('New York', 'Jets', 3, 2);
console.log(team1);
const team2 = new Football('Baltimore', 'Ravens', 3, 2);
console.log(team2);
const team3 = new Football('Cleveland', 'Browns', 2, 3);
console.log(team3);
