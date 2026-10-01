const coin = document.getElementById("coin");
const resultOutput = document.getElementById("result");


function flipCoin() {
    console.log("Coin flipped");
    result = Math.random() < 0.5 ? "Heads": "Tails";
    resultOutput.innerHTML = result;
    coin.src = "assets/" + result.toLowerCase() + ".svg"
}