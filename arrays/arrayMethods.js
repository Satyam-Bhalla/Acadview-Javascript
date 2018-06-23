// function isBelowThreshold(currentValue) {
//     return currentValue < 40;
// }


var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var arr = [1,2,3,4,5,6]
// console.log(arr.every(isBelowThreshold))

rcmd



// var a =arr.some(function (currentValue) {
//     return currentValue < 1;
// })

var a= arr.filter(function(value){
    return value < 4 && value > 2
})

console.log(a)