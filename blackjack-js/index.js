
// set varaibales and create array


let cardsEl = document.getElementById("cards-el")
let sum = document.getElementById("sum")
let winner = document.getElementById('winner')
let loser = document.getElementById("loser")
// let allCards = []


// start Game

function startGame() {

    // clearing everying
    console.clear()
    allCards = []
    winner.innerText = ""
    loser.innerText = ""
    sum.innerText = " "
    cardsEl.innerText = " "
    let result = 0
    
    // get random Number
    function getRandomNumber(min, max) {

        // get 2 random numbers between 2 and 11
        // add it to allCards array
        
        allCards.push(((Math.floor)( Math.random() * (max - min) + min)) )
        allCards.push(((Math.floor)( Math.random() * (max - min) + min)) )
        console.log(allCards);
        

        // change text of cardsEl to whats in allCards
        cardsEl.innerText = allCards
       
        // add items in allCards together and make result eqaul the sum of it
        for (let i = 0; i < allCards.length; i++) {
              result += allCards[i];     
        }


        // update text of sum
        sum.textContent = "Sum:" +  result
     }
    
    getRandomNumber(2,11)
    
}

// add a new card
function newCard() {

    // set result to 0
    let result = 0

    // add all items in allCards together and set the result to the sum 
    for (let i = 0; i < allCards.length; i++) {
          result += allCards[i];
        
    }

    // if result is under 21 add a new card

    if (result < 21 ) {
        function getNewCard(min, max) {

            // get new random Number and add it to allCards
            allCards.push(((Math.floor)( Math.random() * (max - min) + min)) )

           //  get the value of the new card
           let newestCard = allCards[allCards.length- 1]
            

           //   add the new card to the text
            cardsEl.innerText = allCards
            
            // add the new card to the total sum
            result += newestCard

         
            
            // update sum text to new result
            sum.textContent = "Sum: " +  result

            
            // create new button and New Game as ots text
            var btn = document.createElement("BUTTON");
            btn.innerText = "New Game"

            // set onclick too btn that runs startGame function

            btn.onclick = function(event) {
                startGame()
                
                // remove button
                let btnremover = document.getElementsByTagName("BUTTON")[2]
                btnremover.remove()
            }
            

             if (result > 21 ){
                console.log("You lost");
                loser.innerText = "You lost"   
                
                // add button to body
                document.body.appendChild(btn);

                
            }else if (result === 21){
                console.log("You won");
                winner.innerText = "You won"

                 // add button to body
                document.body.appendChild(btn)

            }
            
        }
         getNewCard(2,11)
  
    }

}
