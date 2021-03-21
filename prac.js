// data = {
//     player1: 'rock',
//     player2: 'paper',
//     player3: 'Scissor',
//     player4: 'rock'
// }

// let totol = {
//         player1: {
//             player1: 0,
//             player2: 0,
//             player3: 0,
//             player4: 0
//         },
//         player2: {
//             player1: 0,
//             player2: 0,
//             player3: 0,
//             player4: 0
//         },
//         player3: {
//             player1: 0,
//             player2: 0,
//             player3: 0,
//             player4: 0
//         },
//         player4: {
//             player1: 0,
//             player2: 0,
//             player3: 0,
//             player4: 0
//         }
//     }
// player1_against: {
//     player2:
// }
// console.log(Object.keys(data))
// console.log(Object.keys(data).length)

// console.log(totol)

// let list = Object.keys(data)
//     // console.log(list)


// for (let i = 0; i < list.length; i++) {
//     // console.log(list[i])
//     for (let k = 0; k < list.length; k++) {
//         if (list[i] != list[k]) {
//             if (data[list[i]] == 'rock' && data[list[k]] == 'scissor') {
//                 console.log(`${list[i]} won against ${list[k]}`)
//                 totol[list[i]][list[k]] = totol[list[i]][list[k]] + 1
//             } else if (data[list[i]] == 'paper' && data[list[k]] == 'rock') {
//                 console.log(`${list[i]} won against ${list[k]}`)
//                 totol[list[i]][list[k]] = totol[list[i]][list[k]] + 1
//             } else if (data[list[i]] == 'scissor' && data[list[k]] == 'paper') {
//                 console.log(`${list[i]} won against ${list[k]}`)
//                 totol[list[i]][list[k]] = totol[list[i]][list[k]] + 1
//             }
//         }

//     }

// }

// totol['paper'] = 1
// console.log(totol['player1']['player1'])
// totol['player1']['player1'] = totol['player1']['player1'] + 2
// console.log(totol['player1']['player1'])
// console.log(totol)
// console.log(data[list[0]])



// console.log(typeof(list[0]))
// console.log(list[0])
// console.log(typeof(data[`${list[0]}`]))



// let vada = {}
// let pav = {
//     name: 'aniket',
//     game: 'pubg'
// }
// for (i = 0; i <= 2; i++) {
//     vada[i] = pav
// }
// vada['pav'] = pav
// console.log(vada)

list = {}
players = [1, 2]
for (i = 0; i <= players.length - 1; i++) {
    key = players[i]
    list[key] = 0
}

console.log(players[0])
console.log(list)