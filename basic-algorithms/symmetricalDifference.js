// using Sets and the formula (A-B)U(B-A)
let symDiffSet = (...arr) => {
    let inputSets = arr.map(e => new Set(e)),
        unionOfDifference = new Set(arr[0])
    for (let i = 1; i < inputSets.length; i++) {
        let differenceOfSet1 = new Set([...unionOfDifference].filter(x => !inputSets[i].has(x))),
            differenceOfSet2 = new Set([...inputSets[i]].filter(x => !unionOfDifference.has(x)))
        unionOfDifference = new Set([...differenceOfSet1, ...differenceOfSet2])
    }
    return [...unionOfDifference]
}

// using Arrays and the formula (A-B)U(B-A)
let symDiffArray = (...arr) => {
    let unionOfDifference = arr[0]
    for (let i = 1; i < arr.length; i++) {
        let differenceOfSet1 = unionOfDifference.filter(x => {
            if (arr[i].indexOf(x) >= 0) return false
            else return true
        }),
            differenceOfSet2 = arr[i].filter(x => {
                if (unionOfDifference.indexOf(x) >= 0) return false;
                else return true
            })
        unionOfDifference = differenceOfSet1.concat(differenceOfSet2)
    }
    return unionOfDifference
}

// using Sets and the formula (AUB)-(A intersection B)
let symDiffSetIntersection = (...arr) => {
    let inputSets = arr.map(e => new Set(e)),
        unionOfDifference = new Set(arr[0])
    for (let i = 1; i < inputSets.length; i++) {
        let intersectionOfSet = new Set([...unionOfDifference].filter(x => inputSets[i].has(x))),
            unionOfSet = new Set([...unionOfDifference, ...inputSets[i]]),
            difference = new Set([...unionOfSet].filter(x => !intersectionOfSet.has(x)))
        unionOfDifference = difference
    }
    return [...unionOfDifference]
}

// using Arrays and the formula (AUB)-(A intersection B)
let symDiffArrayIntersection = (...arr) => {
    let unionOfDifference = arr[0]
    for (let i = 1; i < arr.length; i++) {
        let intersectionOfSet = unionOfDifference.filter(x => {
            if (arr[i].indexOf(x) >= 0) return true
            else return false
        }),
            unionOfSet = unionOfDifference.concat(arr[i]),
            difference = unionOfSet.filter(x => {
                if (intersectionOfSet.indexOf(x) >= 0) return false;
                else return true
            })
        unionOfDifference = difference
    }
    return [...unionOfDifference]
}


//Set Difference in Arrays
// [1, 2, 3].filter(x => {
//     if ([5,2,1,4].indexOf(x) >= 0) return false
//     return true
// })


console.log(symDiffArray([1, 2, 3], [5, 2, 1, 4]))
console.log(symDiffSet([1, 2, 3], [5, 2, 1, 4]))
console.log(symDiffSetIntersection([1, 2, 3], [5, 2, 1, 4]))
console.log(symDiffArrayIntersection([1, 2, 3], [5, 2, 1, 4]))