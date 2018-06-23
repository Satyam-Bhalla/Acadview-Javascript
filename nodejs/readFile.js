let fs = require('fs'),
    path = require('path'),
    file = path.resolve(__dirname + '/package.json'),
    random = require('./randString')

    console.log(random())

// fs.readFile(file, (err, data) => {
//     if(err) return console.log(err)
//     console.log(data.toString())
// })

// fs.appendFile(file, 'hello', (err) => {
//     if (err) return console.log(err)
//     console.log('content added')
// })

// fs.readFile(file, (err, data) => {
//     if(err) return console.log(err)
//     console.log(data.toString())
// })

// fs.unlink(file, err => {
//     if(err) return console.log(err)
//     console.log('deleted')
// })