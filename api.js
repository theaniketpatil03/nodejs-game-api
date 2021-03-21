let choice = ['rock', 'paper', 'scissor'];

let all = {};

let total = {
    player1: {
        player1: 0,
        player2: 0,
        player3: 0,
        player4: 0
    },
    player2: {
        player1: 0,
        player2: 0,
        player3: 0,
        player4: 0
    },
    player3: {
        player1: 0,
        player2: 0,
        player3: 0,
        player4: 0
    },
    player4: {
        player1: 0,
        player2: 0,
        player3: 0,
        player4: 0
    }
}

for (let i = 0; i <= 49; i++) {

    let data = {
        player1: choice[Math.floor(Math.random() * choice.length)],
        player2: choice[Math.floor(Math.random() * choice.length)],
        player3: choice[Math.floor(Math.random() * choice.length)],
        player4: choice[Math.floor(Math.random() * choice.length)]
    }
    if (i + 1 == 1) {
        all[`${i+1}st Iteration`] = data
    } else if (i + 1 == 2) {
        all[`${i+1}nd Iteration`] = data
    } else if (i + 1 == 3) {
        all[`${i+1}rd Iteration`] = data
    } else {
        all[`${i+1}th Iteration`] = data
    }

    let list = Object.keys(data)

    for (let i = 0; i < list.length; i++) {
        for (let k = 0; k < list.length; k++) {
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
all['Totals'] = total;

module.exports = all;