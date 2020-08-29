var suites = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
var cardValue = ['King', 'Queen', 'Jack', 'Ace', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']; 

var fullDeck = [
    {"suit":"Hearts",
    "value":"King"},
    {"suit":"Hearts",
    "value":"Queen"},
    {"suit":"Hearts",
    "value":"Jack"},
    {"suit":"Hearts",
    "value":"Ace"},
    {"suit":"Hearts",
    "value":"2"},
    {"suit":"Hearts",
    "value":"3"},
    {"suit":"Hearts",
    "value":"4"},
    {"suit":"Hearts",
    "value":"5"},
    {"suit":"Hearts",
    "value":"6"},
    {"suit":"Hearts",
    "value":"7"},
    {"suit":"Hearts",
    "value":"8"},
    {"suit":"Hearts",
    "value":"9"},
    {"suit":"Hearts",
    "value":"10"},

    {"suit":"Diamonds",
    "value":"King"},
    {"suit":"Diamonds",
    "value":"Queen"},
    {"suit":"Diamonds",
    "value":"Jack"},
    {"suit":"Diamonds",
    "value":"Ace"},
    {"suit":"Diamonds",
    "value":"2"},
    {"suit":"Diamonds",
    "value":"3"},
    {"suit":"Diamonds",
    "value":"4"},
    {"suit":"Diamonds",
    "value":"5"},
    {"suit":"Diamonds",
    "value":"6"},
    {"suit":"Diamonds",
    "value":"7"},
    {"suit":"Diamonds",
    "value":"8"},
    {"suit":"Diamonds",
    "value":"9"},
    {"suit":"Diamonds",
    "value":"10"},

    {"suit":"Clubs",
    "value":"King"},
    {"suit":"Clubs",
    "value":"Queen"},
    {"suit":"Clubs",
    "value":"Jack"},
    {"suit":"Clubs",
    "value":"Ace"},
    {"suit":"Clubs",
    "value":"2"},
    {"suit":"Clubs",
    "value":"3"},
    {"suit":"Clubs",
    "value":"4"},
    {"suit":"Clubs",
    "value":"5"},
    {"suit":"Clubs",
    "value":"6"},
    {"suit":"Clubs",
    "value":"7"},
    {"suit":"Clubs",
    "value":"8"},
    {"suit":"Clubs",
    "value":"9"},
    {"suit":"Clubs",
    "value":"10"},

    {"suit":"Spades",
    "value":"King"},
    {"suit":"Spades",
    "value":"Queen"},
    {"suit":"Spades",
    "value":"Jack"},
    {"suit":"Spades",
    "value":"Ace"},
    {"suit":"Spades",
    "value":"2"},
    {"suit":"Spades",
    "value":"3"},
    {"suit":"Spades",
    "value":"4"},
    {"suit":"Spades",
    "value":"5"},
    {"suit":"Spades",
    "value":"6"},
    {"suit":"Spades",
    "value":"7"},
    {"suit":"Spades",
    "value":"8"},
    {"suit":"Spades",
    "value":"9"},
    {"suit":"Spades",
    "value":"10"},
]

var playerHand = [];
var dealerHand = [];
var playerScore = 0;
var dealerScore = 0;

const player = document.getElementById("player")
const cardp1 = document.getElementById("player-first-card");
const cardp2 = document.getElementById("player-second-card");
const pscore = document.getElementById("playerScore")

const dealer = document.getElementById("dealer")
const cardd1 = document.getElementById("dealer-first-card");
const cardd2 = document.getElementById("dealer-second-card");
const dscore = document.getElementById("dealerScore");

var playerCash = 30;

// const dealerHidden = document.getElementById("dealer-hidden");

function getRandomNumber(max){
    return Math.floor(Math.random() * (max))
}

function getRandomCard(){
    cardNumber = getRandomNumber(52)
    return [fullDeck[getRandomNumber(cardNumber)].suit,
    fullDeck[getRandomNumber(cardNumber)].value]
}

function updateDom(){
    player.innerHTML = '';
    dealer.innerHTML = '';

    for (i = 0; i < playerHand.length; i ++) {
        newCard = document.createElement("p");
        newCard.innerHTML = playerHand[i][1] + " of " + playerHand[i][0];
        player.append(newCard)
    }
    for (i = 0; i < dealerHand.length; i ++) {
        newCard = document.createElement("p");
        newCard.innerHTML = dealerHand[i][1] + " of " + dealerHand[i][0];
        newCard.id = "dealer-card-" + (i+1);
        if (i === 1) {
            dealerHidden = document.createElement("p");
            dealerHidden.innerHTML = "(Face-down card)";
            dealerHidden.id = "dealer-hidden";
            newCard.classList.add("hide-element");
            dealer.append(dealerHidden)
        }
        dealer.append(newCard)
        
    }
}

function updateScoreDom(){
    pscore.innerHTML = calculateScore(playerHand);
}

function dealCards(){
    document.getElementById("game-status-update").innerHTML = "";
    document.getElementById("hit-button").disabled = false;
    document.getElementById("stay-button").disabled = false;
    playerHand = [];
    dealerHand = [];

    document.getElementById("player").classList.remove("hide-element");
    document.getElementById("dealer").classList.remove("hide-element");

    while (playerHand.length < 2) {
        newCard1 = getRandomCard();
        if (!(playerHand.includes(newCard1)) && !(dealerHand.includes(newCard1))) 
         {playerHand.push(newCard1);}
    }
    while (dealerHand.length < 2) {
        newCard2 = getRandomCard();
        if (!(playerHand.includes(newCard2)) && !(dealerHand.includes(newCard2))) {
        dealerHand.push(newCard2)}
    };

    updateDom();
    updateScoreDom();
    document.getElementById("deal-button").disabled = true;
    dscore.innerHTML = "???";
}

function hit(){
    newCard1 = getRandomCard();
        if (!(playerHand.includes(newCard1)) && !(dealerHand.includes(newCard1))) 
         {playerHand.push(newCard1);};
         updateDom();
         updateScoreDom();
         checkScores()
}

function calculateScore(hand){
    highScore = 0;
    lowScore = 0;
    for (i=0; i < hand.length; i++) {
        if (hand[i][1] === 'Ace') {
            highScore = highScore + 11;
            lowScore = lowScore + 1;} 
        else if ( ['King','Queen','Jack'].includes(hand[i][1]) ) {
            highScore = highScore + 10;
            lowScore = lowScore + 10;
        } else if (['1','2','3','4','5','6','7','8','9','10'].includes(hand[i][1])) {
            highScore = highScore + parseInt(hand[i][1]);
            lowScore = lowScore + parseInt(hand[i][1])}
        }
    if (highScore <= 21) {
        return highScore
    } else {
    return lowScore
    }
}

function dealerHit(){
    newCard2 = getRandomCard();
    if (!(playerHand.includes(newCard2)) && !(dealerHand.includes(newCard2))) 
        {dealerHand.push(newCard2);};
        updateDom();
        dscore.innerHTML = calculateScore(dealerHand);
}

const cashOnHand = document.getElementById("cash-on-hand");

function updateCashDom() {
    cashOnHand.innerHTML = playerCash;
}

function stay(){
    document.getElementById("dealer-hidden").classList.add("hide-element");
    document.getElementById("dealer-card-2").classList.remove("hide-element");
    
    document.getElementById("hit-button").disabled = true;
    document.getElementById("stay-button").disabled = true;

    dscore.innerHTML = calculateScore(dealerHand);
    
    while (calculateScore(dealerHand) < 17) {dealerHit()};
    
    checkScores();
    if ( calculateScore(playerHand) < 22 && calculateScore(dealerHand) < 22) {
    nameWinner();}
    document.getElementById("dealer-hidden").classList.add("hide-element");
}

function forceDeal(){
    document.getElementById("deal-button").disabled = false;
    document.getElementById("hit-button").disabled = true;
    document.getElementById("stay-button").disabled = true;
}

function checkScores(){
    if (calculateScore(playerHand) > 21) {
        document.getElementById("game-status-update").innerHTML = "You bust and lose your cash!";
        forceDeal();
        playerCash = playerCash - 5;
        updateCashDom();
        document.getElementById("dealer-hidden").classList.add("hide-element");
    }
    if (calculateScore(dealerHand) > 21) {
        document.getElementById("game-status-update").innerHTML = "The dealer busted! You win big!";
        forceDeal();
        playerCash = playerCash + 5;
        updateCashDom();
    }
}

function nameWinner(){
    if (calculateScore(playerHand) === calculateScore(dealerHand)) {
        document.getElementById("game-status-update").innerHTML = "Tie means we push.";
        forceDeal();
        updateCashDom();
    } else if (calculateScore(playerHand) > calculateScore(dealerHand)) {
        document.getElementById("game-status-update").innerHTML = "You won big!!";
        forceDeal();
        playerCash = playerCash + 5;
        updateCashDom();
    } else if (calculateScore(playerHand) < calculateScore(dealerHand)) {
        document.getElementById("game-status-update").innerHTML = "You lose your money!";
        forceDeal();
        playerCash = playerCash - 5;
        updateCashDom();
    }
}

// function reset(){
// //
// }