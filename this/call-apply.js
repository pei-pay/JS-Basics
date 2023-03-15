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
