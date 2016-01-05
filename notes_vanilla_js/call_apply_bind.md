# call, apply, bind, etc

- [Javascriptのcall/apply関数のプロっぽい使い方 〜 JSおくのほそ道 #014](http://qiita.com/hosomichi/items/155af03120a330fd4437)
    + 応用編１：なりすまし
    + 応用編２：オブジェクト指向的に継承する
    + 応用編３：applyの活用
    + 応用編４：処理の汎化

```js
// 処理の汎化
function repeat(arr, fn) {
    var i = 0; len = arr.length;
    for (; i < len; i++) {
      fn.call(arr[i]);
    }
}

// メイン処理
repeat([
      new Rubbish('チラシ', 'flammable'),
      new Rubbish('空き缶', 'nonflammable'),
      new Rubbish('紙くず', 'flammable')
  ], 
  function() {
    if (this.type === 'flammable') {
      frammableTrashBox.push(this);
    } else {
      nonflammableTrashBox.push(this);
    }
  }
);
```


