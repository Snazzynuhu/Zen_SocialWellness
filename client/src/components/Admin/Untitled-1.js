// function minMoves(arr1, arr2) {

//     const array1 = arr1.join('');
//     const array2 = arr2.join('');
//     let sum = 0;
    
//     [...array1].forEach((move, index) => {
//         sum += Math.abs(move - array2[index])
//     });
//     console.log(sum);
// }

// minMoves([123,543], [321,279])


function counts(teamA, teamB) {
    teamA.sort((a, b) => a - b)
    const goalCount = [];

    teamB.forEach(match => {
        let count = 0;
        teamA.forEach(score => {
            if (score <= match) {
                count++;
            }
        })
        goalCount.push(count)
    });

    console.log(goalCount);
}
counts([3,2,1], [2,4])