let express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3000,
    path = require('path'),
    bodyParser = require('body-parser')


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: false
}))

let logger = (req, res, next) => {
    console.log((new Date()).getTime(), req.status, req.url)
    next()
},
    middle2 = (req, res, next) => {
        console.log('i am middleware 2')
        next()
    },
    isValid = (req, res, next) => {
        //check if a valid session
        // then next()
        // else res.redirect('/login')
    }

app.get('/', logger, (req, res) => {
    res.status(200)
    res.sendFile(path.resolve(__dirname + '/public/index.html'))
})

app.post('/', (req, res) => {
    let data = req.body
    if (data.username && data.pass) {
        res.send('Username : ' + data.username + '\nPassword : ' + data.pass)
    }
    else {
        res.status(403);
        res.send('unauth.')
    }
})


app.listen(PORT, err => {
    if (err) return console.log(err)
    console.log(`server running at ${PORT}`)
})