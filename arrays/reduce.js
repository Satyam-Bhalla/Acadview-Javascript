var array1 = [1, 2, 3, 4],
    reducer = array1.reduce(function (acuumulator, currentValue) {
        return acuumulator * currentValue
    })


console.log(reducer)