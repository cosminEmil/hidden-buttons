function createButtons() {
    const noButtons = document.getElementById("nrOfButtons").value;
    result = Math.floor(Math.random() * (noButtons));
    for (let i = 0; i < noButtons; ++i) {
        let button = document.createElement("button");
        button.id = i;
        button.className = "btn mt-0 ml-5"
        let element = document.getElementById("buttons");
        button.addEventListener("click", () => {checkWinner(button)});
        element.appendChild(button);
    }
}

function checkWinner(button) {
    if (button.id == result) {
        button.innerText = "Winner";
    } else {
        button.innerText = "Loser";
    }
}