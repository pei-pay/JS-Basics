/*
 * Symbol
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
 *
 * プロパティの重複を避けるために、必ず一位の値を返す関数
 */
const s = Symbol('hello')
const s2 = Symbol('hello')

console.log(s) // Symbol(hello)
console.log(s2) // Symbol(hello)
console.log(s === s2) // false
console.log(typeof s) // Symbol

const str = new String('Tom')
console.log(str)

/*
 * Symbol 導入経緯
 *
 * ES5の時点で、開発者が下記のように独自に定義したプロパティが存在していた場合、
 * `String.prototype.iterator = function () {}`
 * ES6にあがったタイミングで同じようにビルドインオブジェクトのメソッドとして追加された場合、競合してしまう
 *
 * Symbolを使えば、名前が競合しても異なる値が毎回返ってくるので問題なし
 */

String.prototype[s] = function () {
  return 'hello ' + this
}
String.prototype[s2] = function () {
  return 'goodbye ' + this
}

const tom = 'Tom'
console.log(tom[s]())
console.log(tom[s2]())
