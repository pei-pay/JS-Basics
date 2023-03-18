/**
 *  クロージャー
 *
 *   レキシカルスコープの変数を関数が使用している状態
 */
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
