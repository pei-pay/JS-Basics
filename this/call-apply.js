/**
 * bind
 *
 * `this`や引数の参照先を変更。
 * 使用時短で実行はしない
 */

function a() {
  console.log('Hello ' + this.name)
}
const tim = { name: 'Tim' }
const b = a.bind(tim)
b() // Hello Tim

/**
 * call,apply
 *
 * `this`や引数の参照先を変更。
 * 同時に関数を実行する
 */
a.apply(tim) // Hello Tim
a.call(tim) // Hello Tim

/**
 * callとapplyの違い
 */
function c(name, name1) {
  console.log('Bye ' + name + ' ' + name1)
}

c.apply(null, ['Jack', 'Bob'])
c.call(null, 'Jack', 'Bob')

const array = [1, 2, 3, 4, 5]
const result1 = Math.max.apply(null, array) // ES5
const result2 = Math.max(...array) // ES6
console.log(result1)
console.log(result2)
