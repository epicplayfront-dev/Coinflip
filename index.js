const coin = document.getElementById("coin");
const resultOutput = document.getElementById("result");
let isFlipping = false


function flipCoin() {
    if (isFlipping) {
        return
    }
    isFlipping = true
    resultOutput.innerHTML = "Flipping...";
    coin.classList.add("flipping");
    coin.addEventListener("animationend", () => {
        coin.classList.remove("flipping");
        console.log("flip anim end")
        isFlipping = false
        resultOutput.innerHTML = result;
        coin.src = "assets/" + result.toLowerCase() + ".svg"
    }, {once:true});
    const result = Math.random() < 0.5 ? "Heads": "Tails";
}