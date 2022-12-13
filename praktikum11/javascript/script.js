document.querySelectorAll("#option a").forEach((a) => {
    // jika nanti di klik makan akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    });
})
function computerChoice(element){
    // Pilihan user
    let pilihanUser = element.target.innerText;

    // Menangkap elemen result dengan queryselector
    let pilihanKomputer = document.querySelector("#result");

    // membuat array pilihan untuk komputer
    let choices = ["Rock","Paper","Scissors"];

    // pulihan random komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * 2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan user == komputer (draw)
    if(pilihanUser == pilihanKomputer){
        alert("Draw")
    }
    // jika pilihan user menang
    else if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("User Win!")
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("User Winn!")
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("User Winnn!")
    }

    // jika pilihan user kalah
    else if(pilihanUser == "Rock" && pilihanKomputer == "Paper"){
        alert("Computer Win!")
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Scissors"){
        alert("Computer Winn!")
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Rock"){
        alert("Computer Winnn!")
    }
}