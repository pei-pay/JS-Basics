/**
 *  クロージャー
 *
 *   レキシカルスコープの変数を関数が使用している状態
 */

// プライベート変数
function incrementFactory() {
  let num = 0
  function increment() {
    num = num + 1
    console.log(num)
  }

  return increment
}

const increment = incrementFactory()

increment()
increment()
increment()

// 動的な関数の生成
function addNumberFactory(num) {
  function addNumber(value) {
    return num + value
  }

  return addNumber
}

// 関数を作成する関数に渡す値によって、生成される関数が変わってくる
const add5 = addNumberFactory(5)
const add10 = addNumberFactory(10)
const result = add5(10)
const result2 = add10(10)
console.log(result)
console.log(result2)
