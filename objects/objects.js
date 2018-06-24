var person = {
        name: 'James',
        age: 25,
        eyeColor: 'green',
        walk: function () {
            return 'walking'
        }
    },
    arr = [{
            name: 'James',
            age: 25,
            eyeColor: 'green',
            walk: walk
        },
        {
            name: 'Bob',
            age: 30,
            eyeColor: 'blue',
            walk: walk
        },
        {
            name: 'Marco',
            age: 45,
            eyeColor: 'black',
            walk: walk
        }
    ]

// console.log(person)

person.name = 'Merry'

// console.log(person)


function walk() {
    return 'walking'
}

console.log('name\tage\teye color')
arr.forEach(function (e) {
    console.log(e.name + '\t' + e.age + '\t' + e.eyeColor)


})