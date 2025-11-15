function createButtons() {
    const noButtons = document.getElementById("nrOfButtons").value;
    result = Math.floor(Math.random() * (noButtons));
    for (let i = 0; i < noButtons; ++i) {
        let btn = document.createElement("button");
        btn.id = i;
        btn.className = "btn mt-0 ml-5"
        let element = document.getElementById("buttons");
        btn.addEventListener("click", () => {checkWinner(btn)});
        element.appendChild(btn);
    }
}

function checkWinner(btn) {
    if (btn.id == result) {
        btn.innerText = "Winner";
    } else {
        btn.innerText = "Loser";
    }
}