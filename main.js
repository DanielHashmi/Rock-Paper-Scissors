
let buttons = document.querySelectorAll('.btn');
let para = document.querySelector('.para');
let uCount = document.querySelector('.uCount');
let cCount = document.querySelector('.cCount');
let restart = document.querySelector('button');
let userC = 0;
let compC = 0;

restart.addEventListener('click', () => {
    userC = 0;
    compC = 0;
    uCount.textContent = userC
    cCount.textContent = compC;
})
let comp = ['rock', 'paper', 'scissors'];
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let rand = Math.floor(Math.random() * comp.length)
        let choices = btn.getAttribute('id');
        if (comp[rand] == choices) {
            para.textContent = "Draw"
        } else if (comp[rand] == "rock" && choices == "paper") {
            para.textContent = "You Won & Rock Fails"
            userC++
            uCount.textContent = userC;
        }
        else if (comp[rand] == "paper" && choices == "rock") {
            para.textContent = "Paper Won & You Fail"
            compC++
            cCount.textContent = compC;
        }
        else if (comp[rand] == "scissors" && choices == "rock") {
            para.textContent = "You Won & Scissors Fail"
            userC++
            uCount.textContent = userC;
        }
        else if (comp[rand] == "paper" && choices == "scissors") {
            para.textContent = "You Won & Paper Fail"
            userC++
            uCount.textContent = userC;
        }
        else if (comp[rand] == "rock" && choices == "scissors") {
            para.textContent = "Rock Won & You Fail"
            compC++
            cCount.textContent = compC;
        }
        else if (comp[rand] == "scissors" && choices == "paper") {
            para.textContent = "Scissors Won & You Fail"
            compC++
            cCount.textContent = compC;
        }
    })
})