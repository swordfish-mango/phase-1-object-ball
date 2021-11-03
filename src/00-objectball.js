let gameObject = {
    "home": {
        "teamName": "Brooklyn Nets",
        "colors": ["Black","White"],
        "players": {
            "Alan Anderson": {
                "number": 0,
                "shoe": 16,
                "points": 22,
                "rebounds": 12,
                "assists": 12,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 1
            },
            "Reggie Evans": {
                "number": 30,
                "shoe": 14,
                "points": 12,
                "rebounds": 12,
                "assists": 12,
                "steals": 12,
                "blocks": 12,
                "slamDunks": 7
            },
            "Brook Lopez": {
                "number": 11,
                "shoe": 17,
                "points": 17,
                "rebounds": 19,
                "assists": 10,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 15
            },
            "Mason Plumlee": {
                "number": 1,
                "shoe": 19,
                "points": 26,
                "rebounds": 12,
                "assists": 6,
                "steals": 3,
                "blocks": 8,
                "slamDunks": 5
            },
            "Jason Terry": {
                "number": 31,
                "shoe": 15,
                "points": 19,
                "rebounds": 2,
                "assists": 2,
                "steals": 4,
                "blocks": 11,
                "slamDunks": 1
            }
        }
    },
    "away": {
        "teamName": "Charlotte Hornets",
        "colors": ["Turquoise","Purple"],
        "players": {
            "Jeff Adrien": {
                "number": 4,
                "shoe": 18,
                "points": 10,
                "rebounds": 1,
                "assists": 1,
                "steals": 2,
                "blocks": 7,
                "slamDunks": 2
            },
            "Bismak Biyombo": {
                "number": 0,
                "shoe": 16,
                "points": 12,
                "rebounds": 4,
                "assists": 7,
                "steals": 7,
                "blocks": 15,
                "slamDunks": 10
            },
            "DeSagna Diop": {
                "number": 2,
                "shoe": 14,
                "points": 24,
                "rebounds": 12,
                "assists": 12,
                "steals": 4,
                "blocks": 5,
                "slamDunks": 5
            },
            "Ben Gordon": {
                "number": 8,
                "shoe": 15,
                "points": 33,
                "rebounds": 3,
                "assists": 2,
                "steals": 1,
                "blocks": 1,
                "slamDunks": 0
            },
            "Brendan Haywood": {
                "number": 33,
                "shoe": 15,
                "points": 6,
                "rebounds": 12,
                "assists": 12,
                "steals": 22,
                "blocks": 5,
                "slamDunks": 12
            }
        }
    }
};

//helper functions/variables
const findTeamFromPlayer = playerName => Object.keys(gameObject["home"]["players"]).includes(playerName) ? "home" : "away";
const findTeamFromName = name =>  gameObject["home"]["teamName"]===name ? "home" : "away";
let players = [...Object.keys(gameObject["home"]["players"]),...Object.keys(gameObject["away"]["players"])];
const highestPlayerByStat = stat => players.sort((p1,p2) => gameObject[findTeamFromPlayer(p1)]["players"][p1][stat] - gameObject[findTeamFromPlayer(p2)]["players"][p2][stat]).at(-1);

//main functions / functions assume valid input👀
const numPointsScored = playerName => gameObject[findTeamFromPlayer(playerName)]["players"][playerName]["points"];

const shoeSize = playerName => gameObject[findTeamFromPlayer(playerName)]["players"][playerName]["shoe"];

const teamColors = teamName => gameObject[findTeamFromName(teamName)]["colors"];

const teamNames = () => Object.keys(gameObject).map(element => gameObject[element]["teamName"]);

const playerNumbers = teamName => Object.keys(gameObject[findTeamFromName(teamName)]["players"]).map(element => gameObject[findTeamFromName(teamName)]["players"][element]["number"]);

const playerStats = playerName => gameObject[findTeamFromPlayer(playerName)]["players"][playerName];

const bigShoeRebounds = () => gameObject[findTeamFromPlayer(highestPlayerByStat("shoe"))]["players"][highestPlayerByStat("shoe")]["rebounds"];

const mostPointsScored = () => highestPlayerByStat("points");

const playerWithLongestName = () => players.sort((p1,p2)=>p1.length-p2.length).at(-1);

const doesLongNameStealATon = () => playerWithLongestName() === highestPlayerByStat("steals");
