

let cardsEl = document.getElementById("cards-el")
let sum = document.getElementById("sum")
let winner = document.getElementById('winner')
let loser = document.getElementById("loser")
let allCards = []


function startGame() {
    console.clear()
    allCards = []
    winner.innerText = ""
    loser.innerText = ""

    function getRandomNumber(min, max) {
        
        allCards.push(((Math.floor)( Math.random() * (max - min) + min)) )
        allCards.push(((Math.floor)( Math.random() * (max - min) + min)) )
        console.log(allCards);
        

        cardsEl.innerText = allCards
       
        let result = allCards[0] + allCards[1]
        sum.textContent = "Sum:" +  result
     }
    
    getRandomNumber(2,11)
    
}

function newCard() {
    let result = 0

    for (let i = 0; i < allCards.length; i++) {
          result += allCards[i];
        
    }
    // console.log(result);

    if (result < 21 ) {
        function getNewCard(min, max) {

            allCards.push(((Math.floor)( Math.random() * (max - min) + min)) )

           let newestCard = allCards[allCards.length- 1]
            
             cardsEl.innerText = allCards
            
            console.log(newestCard);
            console.log(allCards);
            result += newestCard
            console.log(result);
            
            sum.textContent = "Sum: " +  result
            
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
