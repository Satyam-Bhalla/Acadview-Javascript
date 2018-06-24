let obj = { x: 2, y: 4 }
// let val = obj.x,
//     val2 = obj.y

let { val, val1 } = obj

let { y: a, x: b } = obj

let a = {
    start: { x: 12, y: 13 },
    end: { x: 20, y: 30 }
}

let { start: { x: startX, y: startY } } = a
let ab = [1, 2, 3, 4, 5]

let [x, y, ...ar] = ab
let [x, , , y] = ab

let profile = ({ name, age, eyeColor }) => {

}

let printName = (name=`some name`) => `hello  ${name}`

// console.log('number is %d',number)

const person = {
    name  : 'James',
    saysHello(){ return `hello`}
}

const person = {
    name  : 'James',
    saysHello : ()=>{ return `hello`}
}