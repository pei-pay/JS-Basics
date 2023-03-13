window.name = 'John'
const person = {
  name: 'Tom',
  hello: function () {
    console.log('Hello ' + this.name)
  }
}

person.hello() // 'Hello Tom'

/*
 * bindで設定したobjectをthisの参照先にする
 */
const helloTom = person.hello.bind(person)

function fn(ref) {
  ref()
}

fn(helloTom) // 'Hello Tom'

/*
 * bind: thisのobjectを固定
 */
function a() {
  console.log('hello ' + this.name)
}

const b = a.bind({ name: 'Tim' })
b() // 'Hello Tim'

/*
 * bind: 引数を固定
 */
function c(name) {
  console.log('hello ' + name)
}

const d = c.bind(null, 'Tim')

d('Tom') // 'Hello Time'
