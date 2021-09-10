// 接続ボタンが押されたら main 関数を実行する
document.querySelector("#接続ボタン").onclick = main;

async function main() {
  // 最寄りのキューブに接続する
  const cube = await new toio.scanner.NearestScanner().start();
  await cube.connect();

  // 前後左右ボタンが押されたらキューブを動かす
  document.querySelector("#前ボタン").onclick = () => cube.move(50, 50, 100);
  document.querySelector("#左ボタン").onclick = () => cube.move(-50, 50, 100);
  document.querySelector("#右ボタン").onclick = () => cube.move(50, -50, 100);
  document.querySelector("#後ボタン").onclick = () => cube.move(-50, -50, 100);

  // キューブがマット上で検出した位置と向きを表示する
  const state = document.querySelector("#状態");
  cube.on("id:position-id", (data) => {
    state.textContent = `(${data.x}, ${data.y}), ${data.angle}`;
  });
}
