// const toFahrenheit = celcius => 1.8*celcius+32
// console.log(toFahrenheit(20))

let maximumSubstr = str => {
    let sub = str.split(' '), 
        lengths = sub.map(e => e.length),
        maxLenIndex = lengths.indexOf(Math.max(...lengths))
    return sub[maxLenIndex]

}

console.log(maximumSubstr('Hello class, how is everyone'))


const ar =[1,2,3]
Object.freeze(ar)



// function name(){}
// const name = () => {}
// const name = arg => {}
// const name = (arg1,arg2) => {}
// const name = () => 'hello'

// console.log(ar)
// [1,2,3]
// console.log(...ar)
// 1 2 3
// const name = (a,b,...arr) => {
//     arr[2]
// }
// name(1,2)
// name(1,2,3,4,5)

// Math.max(...ar)

