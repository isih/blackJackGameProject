let playerInfo = {
    name: "James",
    chips: 160
}

let sum = 0
haveJack = false
isAlive = false
let message = ""
let actualSum = document.getElementById("actual-sum")
let resultVarr = document.getElementById("round-message")
let actualCards = document.getElementById("actual-cards")
let actualNameBalance = document.getElementById("name-balance")

actualNameBalance.textContent = playerInfo.name + ": $" + playerInfo.chips

aryCards = []

console.log(aryCards)

function getRandomCard() {
    randomFinal = Math.floor(Math.random() * 12) + 1

    if(randomFinal === 1) {
        return 11
    }

    else if(randomFinal === 11) {
        return 10
    }

    else if(randomFinal === 12) {
        return 10
    }

    else if(randomFinal === 13) {
        return 10
    }

    else{
        return randomFinal
    }
    
    return randomFinal
}




function startGame() {
    
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    aryCards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    let actualCards = document.getElementById("actual-cards")
    actualCards.textContent = "Cards: "
    
    for(i=0; i<aryCards.length; i++) {
        actualCards.textContent += aryCards[i] + " "
    }
    
    if(sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    
    else if(sum === 21) {
        message = "Wohoo! You've got a BlackJack!"
        haveJack = true
    }
    
    else{
        message = "You are out of the Game..."
        isAlive = false
    }
    let resultVarr = document.getElementById("round-message")
    resultVarr.textContent = message
    let actualSum = document.getElementById("actual-sum")
    actualSum.textContent = "Sum: " + sum
    
     
}



function newCard() {
    if(isAlive === true && haveJack === false) {
        let actualNewCard = getRandomCard()
        sum += actualNewCard
        aryCards.push(actualNewCard)
        renderGame()
    }
    
}
