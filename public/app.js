let chocolat = Math.round(Math.random() * 10);
// console.log(chocolat);
// let bravo = false;
let response = document.querySelector("#response");
let clic = document.querySelector("#clic");
let resultat = document.querySelector("#resultat");
// while (!bravo) {
// let guess = prompt();
clic.addEventListener("click", function() {
        let number = response.value;
        console.log(number);
        if (number < chocolat) {
            resultat.textContent = "C'est trop petit !"
            console.log("C'est trop petit !");
        } else if (number > chocolat) {
            resultat.textContent = "C'est trop grand !"
                // console.log("C'est trop grand!");
        } else {
            resultat.textContent = "Bravo !"
            console.log("Bravo !");
            // bravo = true;
        }
    })
    // }