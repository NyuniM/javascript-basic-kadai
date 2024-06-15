// 「text」「btn」というidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  text.textContent = "ボタンをクリックしました";
});
