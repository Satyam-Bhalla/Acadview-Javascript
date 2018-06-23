// // var person = function (name, age) {
// //     this.name = name
// //     this.age = age
// // }
// // let myself = new person('Mrinal', 25)

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//         this.nationality = `Indian`
//     }
//     saysHello() {
//         console.log(`hello world`)
//     }
//     giveName() { return this.name }
// }
// let myself = new Person(`Mrinal`, 25)
// console.log(myself.nationality)

class Person2 extends Person{
    constructor(name, age) {
        this._name = name
        this._age = age
    }
    saysHello() {
        console.log(`hello world`)
    }
    get nameOfPerson(){return this._name}
    set nameOfPerson(name){this._name = name}
}
let myself = new Person2(`Mrinal`, 25)
console.log(myself.nameOfPerson)
myself.nameOfPerson = 'john'
console.log(myself.nameOfPerson)
