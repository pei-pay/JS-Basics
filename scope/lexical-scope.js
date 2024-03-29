/**
 * レキシカルスコープ
 *
 * 1. 実行中のコードからみた外部スコープのこと
 *
 * 2. どのようにしてスコープを決定するかの仕様のこと
 */

var x = 10

function foo() {
  console.log(x)
}

function bar() {
  var x = 20
  foo()
}

bar() // 10を出力

var x = 10

/**
 * ダイナミックスコープ
 *
 * 変数の有効範囲が、現在の実行時コンテキストに基づいている。
 * つまり、変数がどこで定義されたかに関係なく、変数が最後に呼び出されたコンテ* キストに基づいて、変数がどの部分で使用できるかが決まります。
 *
 */
