function a() {
  // 関数スコープ
  let b = 0
  console.log(b)
}

a()

{
  // ブロックスコープ
  let c = 1
}
console.log(c) // ReferenceError: c is not defined

{
  var d = 1

  function e() {
    console.log('e is called')
  }
}
e() // e is called

console.log(d) // 1
