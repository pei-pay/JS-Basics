/*
 * Map
 */
const map = new Map()
const key1 = {}

map.set(key1, 'value')
console.log(map.get(key1))

const key2 = function () {}
map.set(key2, 'value2')
console.log(map.get(key2))

let key3 = 0
map.set(key3, 'value3')
console.log(map.get(key3))

map.delete(key3)
console.log(map.get(key3))

for (const [k, v] of map) {
  console.log(k, v)
}

/*
 * Set
 */
const s = new Set()
s.add(key1)
s.add(key2)
s.add(key3)
s.delete(key3)
console.log('key1', s.has(key1)) // true
console.log('key3', s.has(key3)) // false

// const array = Array.from(s) // SetをArrayに変換
const array = [...s] // SetをArrayに変換
console.log('array[0]', array[0]) // {}

for (let key of s) {
  console.log(key)
}
