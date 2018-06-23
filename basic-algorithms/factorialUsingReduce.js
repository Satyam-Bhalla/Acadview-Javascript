










var num = 50,
    numArray = []
for (var i = 2; i <= num; i++) {
    numArray.push(i)
}

var fact = numArray.reduce(function (a, v) {
    return a * v
})

console.log(fact)