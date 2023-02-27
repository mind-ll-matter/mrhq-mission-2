console.log("hello world, it's aj")

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const toLoop = document.getElementById("loop-images");
toLoop.addEventListener("click", loopThrough);


let newContent = document.getElementById("placeholderSectH3");
// newContent.textContent = "";

function loopThrough() {
    for (let i = 0; i < alphabet.length; i++) {
        newContent.innerHTML += alphabet[i]
    }
}