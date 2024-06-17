// 「text」「btn」というidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById("text");
const btn = document.getElementById("btn");

// ボタンがクリックされたら2秒後に文章を書き換えるプログラム
btn.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
    console.log("非同期処理を実行しました");
  }, 2000);
});
