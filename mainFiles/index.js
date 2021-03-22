// choices/inputs for users in game
let choice = ['rock', 'paper', 'scissor'];

// creating empty object for main api
let all = {};

// creating initial object for storing score of each player against each other as it is 4 player game.
let total = {
    player1: {
        player1: undefined,
        player2: 0,
        player3: 0,
        player4: 0
    },
    player2: {
        player1: 0,
        player2: undefined,
        player3: 0,
        player4: 0
    },
    player3: {
        player1: 0,
        player2: 0,
        player3: undefined,
        player4: 0
    },
    player4: {
        player1: 0,
        player2: 0,
        player3: 0,
        player4: undefined
    }
}

// main loop for 50 trials of game.
for (let i = 0; i <= 49; i++) {
    // creating object for storing individual random choice/input of players.
    let data = {
            player1: choice[Math.floor(Math.random() * choice.length)],
            player2: choice[Math.floor(Math.random() * choice.length)],
            player3: choice[Math.floor(Math.random() * choice.length)],
            player4: choice[Math.floor(Math.random() * choice.length)]
        }
        // adding data object to main object
    if (i + 1 == 1) {
        all[`${i+1}st Iteration`] = data
    } else if (i + 1 == 2) {
        all[`${i+1}nd Iteration`] = data
    } else if (i + 1 == 3) {
        all[`${i+1}rd Iteration`] = data
    } else {
        all[`${i+1}th Iteration`] = data
    }
    //creating list of players name for futher data adding work.
    let list = Object.keys(data)
        //creating loop for cheacking condition for each player.
    for (let i = 0; i < list.length; i++) {
        // creating additionl for checking each player to each-other.
        for (let k = 0; k < list.length; k++) {
            // adding the data to total result object by calculating the result for each player only if the player is not same.
            if (list[i] != list[k]) {
                if (data[list[i]] == 'rock' && data[list[k]] == 'scissor') {
                    total[list[i]][list[k]] = total[list[i]][list[k]] + 1
                } else if (data[list[i]] == 'paper' && data[list[k]] == 'rock') {
                    total[list[i]][list[k]] = total[list[i]][list[k]] + 1
                } else if (data[list[i]] == 'scissor' && data[list[k]] == 'paper') {
                    total[list[i]][list[k]] = total[list[i]][list[k]] + 1
                }
            }

        }

    }
};

// adding final total result to main object
all['Totals'] = total;

//exporting our main object as a module to another modules. 
module.exports = all;