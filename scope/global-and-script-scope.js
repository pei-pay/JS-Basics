let a = 0 // scriptScope
var b = 0 // globalScope = windowオブジェクト
function c() {}

console.log(b)

window.d = 1
let d = 2
console.log(d)
