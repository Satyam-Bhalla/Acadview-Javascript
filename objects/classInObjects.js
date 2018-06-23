function Person(name, age, eyeColor, walk) {
    this.name = name
    this.age = age
    this.eyeColor = eyeColor
    this.walk = walk
    this.changeName = function (newName) {
        this.name = newName
    }
}
var father = new Person("John Doe", 60, 'black', function () {
        return 'father walks'
    }),
    mother = new Person('Lily', 40, 'blue', function () {
        return 'mother walks'
    })
// mother.nationality = 'Indian'
// mother['nationality'] ='indian'
// var arr = [father,mother]
// console.log(mother,father)
// mother.changeName('Jane')
// father.changeName('James')
// console.log(mother,father)
// console.log(mother.hasOwnProperty('eyeColor'))

function propertyFindAndAdd(object, property, value) {
    if (object.hasOwnProperty(property))
        return object[property]
    else {
        if (value) {
            object[property] = value
        }
        return object
    }
}

var a = propertyFindAndAdd(mother, 'city', 'Jalandhar')

mother.friends = ['a', 'b', 'c', 'd']
mother.children = [
    new Person('child1', 12, 'black', walk),
    new Person('child2', 22, 'black', walk),
    new Person('child3', 20, 'black', walk),
]

function walk() {
    return 'walk'
}
// console.log(mother)
// console.log(Object.values(mother))
// for(var x in Object.keys(mother)){
//     console.log(mother[x])
// }
// for (var keys in mother){
//     console.log(mother[keys])
// }
// for(var val of mother){
//     console.log(val)
// }

var pers = {
    a: 1,
    b: 2
}

console.log(pers instanceof Person)