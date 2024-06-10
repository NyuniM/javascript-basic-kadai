// 年月日の取得
const date = new Date();
const [year, month, day] = [
  date.getFullYear(),
  date.getMonth() + 1,
  date.getDate(),
];

// 「今日」を出力する関数を定義
const today = () => {
  console.log(year + "年" + month + "月" + day + "日");
};

// 「今日」を出力する関数を呼び出す
today();
