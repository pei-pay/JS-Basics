const add = (a, b) => {
  return a + b
}
console.log(add(1,2))

// currying
const _add = (a) => {
  return function(b) {
    return a + b;
  }
}
console.log(_add(2)(3))

const __add = (a) => (b) => a + b;
const addTen = __add(10)
const addHundred = __add(100)
console.log(addTen(1))
console.log(addHundred(1))