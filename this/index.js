window.name = 'John'
const person = {
  name: 'Tom',
  hello: function () {
    console.log('Hello ' + this.name)
  }
}
/*
 * オブジェクトのメソッドとして実行される場合
 * `this` => 呼び出し元オブジェクト
 */
person.hello()
/*
 * 関数として実行される場合
 * `this` => グローバルオブジェクト
 */
const ref = person.hello
ref()
