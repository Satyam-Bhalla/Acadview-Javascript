let cipher = (message) => {
    let list = message.toLowerCase().split(''),
        ASCIICode = list.map(e => e.charCodeAt(0)),
        codeLimit = {
            max: 'z'.charCodeAt(0),
            min: 'a'.charCodeAt(0),
            mid: 'n'.charCodeAt(0)
        }
    ASCIICode = ASCIICode.map(e => {
        if (e < codeLimit.min && e > codeLimit.max) {
            return String.fromCharCode(e)
        }
        else if (e < codeLimit.mid) {
            return String.fromCharCode(e + 13)
        }
        else {
            return String.fromCharCode(codeLimit.min + (e - codeLimit.mid))
        }
    })
    return ASCIICode.join('')
}

// let rot13 = str => {
//     let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
//         output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm',
//         index = x => input.indexOf(x),
//         translate = x => index(x) > -1 ? output[index(x)] : x
//     return str.split('').map(translate).join('');
// }

console.log(rot13('OPQRf.'))
