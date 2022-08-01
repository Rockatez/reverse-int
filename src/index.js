module.exports = function reverse (n) {
let numberToString = Math.abs(n).toString()
let splitString = numberToString.split('')
let reverseSplitString = splitString.reverse()
let arrToString = reverseSplitString.join('')
let stringToNumber = Number(arrToString)
return stringToNumber
}
