let randomString = () => {
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwzyx0123456789',
        text = ""
    for (let i = 0; i < 6; i++) {
        text += string[Math.floor(Math.random() * string.length)]
    }
    return text
}

let rand = randomString()

console.log(rand)