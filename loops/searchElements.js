function isPresent(array, element) {
    for (var e of array) {
        if(e===element) return true
    }
    return false
}


console.log(isPresent([1, 2, 3 ,'a', 'b'], 1))