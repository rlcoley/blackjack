

let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")
let sum = document.getElementById("sum")
let winner = document.getElementById('winner')
let loser = document.getElementById("loser")
// let num1 = 0

// gets random number



function startGame() {
    console.clear()
    card1.innerText = " "
    card2.innerText = " "
    card3.innerText = " "
    winner.innerText = ""
    loser.innerText = ""
    // let num1 = 0
    // card1.innerText = 30

    function getRandomNumber(min, max) {
         
        let num1 = ((Math.floor)( Math.random() * (max - min) + min))  
        let num2 = ((Math.floor)( Math.random() * (max - min) + min)) 
        console.log(num1);
        console.log(num2);  
        
         card1.innerText = num1
         card2.innerText = num2
         result = num1 + num2
         sum.textContent = "Sum:" +  result

     }
    
    getRandomNumber(2,11)
    
}

function newCard() {
    // console.log(result);
    if (result < 21 ) {
        function getNewCard(min, max) {
            let num3 = ((Math.floor)( Math.random() * (max - min) + min))      
             console.log(num3);
             card3.innerText = num3
             result += num3
             sum.textContent = "Sum:" +  result
             console.log(result + " is the result");
             if (result > 21 ){
                console.log("You lost");
                loser.innerText = "You lost"
            }else if (result === 21){
                console.log("You won");
                winner.innerText = "You won"
            }
        }
         getNewCard(2,11)
  
    }



}
