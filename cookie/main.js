// 背景色の設定
function setBGColor(color) {
  document.body.style.backgroundColor = color
  // Cookieに背景色を保存
  document.cookie = 'bg_color=' + encodeURIComponent(color)
}

// ページ読み込み時にCookieから背景色を取得
function getBGColor() {
  var nameEQ = 'bg_color='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) == 0) {
      // 背景色が保存されていれば、設定する
      var bgcolor = c.substring(nameEQ.length, c.length)
      setBGColor(bgcolor)
    }
  }
}

// ページ読み込み時にCookieから背景色を取得
getBGColor()
