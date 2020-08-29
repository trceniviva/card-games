let cards = [
    "ace-spades","ace-clubs","ace-hearts","ace-diamonds",
    "two-spades","two-clubs","two-hearts","two-diamonds",
    "three-spades","three-clubs","three-hearts","three-diamonds",
    "four-spades","four-clubs","four-hearts","four-diamonds",
    "five-spades","five-clubs","five-hearts","five-diamonds",
    "six-spades","six-clubs","six-hearts","six-diamonds",
    "seven-spades","seven-clubs","seven-hearts","seven-diamonds",
    "eight-spades","eight-clubs","eight-hearts","eight-diamonds",
    "nine-spades","nine-clubs","nine-hearts","nine-diamonds",
    "ten-spades","ten-clubs","ten-hearts","ten-diamonds",
    "jack-spades","jack-clubs","jack-hearts","jack-diamonds",
    "queen-spades","queen-clubs","queen-hearts","queen-diamonds",
    "king-spades","king-clubs","king-hearts","king-diamonds"
]

let playerTurn = true;

let players = 2;
let playerCardsFlipped = 0;
let oppCardsFlipped = 0;
let oppFlipped = [];

var pl1 = document.getElementById("pl1");
var pl2 = document.getElementById("pl2");
var pl3 = document.getElementById("pl3");
var pl4 = document.getElementById("pl4");
var pl5 = document.getElementById("pl5");
var pl6 = document.getElementById("pl6");
var pc1 = document.getElementById("pc1");
var pc2 = document.getElementById("pc2");
var pc3 = document.getElementById("pc3");
var pc4 = document.getElementById("pc4");
var pc5 = document.getElementById("pc5");
var pc6 = document.getElementById("pc6");

const deck = document.getElementById("deck");
const available = document.getElementById("available");
const startGame = document.getElementById("start-game");
const restart = document.getElementById("restart");

function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

let i = 0;

function placeCards() {
    shuffle(cards);
    available.src = "";
    playerCardsFlipped = 0;
    oppCardsFlipped = 0;
    oppFlipped = [];
    i = 0;
    pl1.src = "PNG/red_back.png";
    pl2.src = "PNG/red_back.png";
    pl3.src = "PNG/red_back.png";
    pl4.src = "PNG/red_back.png";
    pl5.src = "PNG/red_back.png";
    pl6.src = "PNG/red_back.png";
    pc1.src = "PNG/red_back.png";
    pc2.src = "PNG/red_back.png";
    pc3.src = "PNG/red_back.png";
    pc4.src = "PNG/red_back.png";
    pc5.src = "PNG/red_back.png";
    pc6.src = "PNG/red_back.png";
    i = i + 12;
    
}

function handleCardClick(cardClicked, cardNumber) {
    if (playerCardsFlipped < 2) {
        document.getElementById(cardClicked).src = "PNG/" + cards[cardNumber] + ".png"
        playerTurn = false;
        playerCardsFlipped = playerCardsFlipped + 1;
    } else if (playerCardsFlipped < 5) {
        document.getElementById(cardClicked).src = "PNG/" + cards[cardNumber] + ".png"
        available.src = "PNG/" + cards[i] + ".png";
        playerCardsFlipped = playerCardsFlipped + 1;
        playerTurn = false;
        flipOppCards();
    } 
}

function flipOppCards() {
    while (oppCardsFlipped < 3) {
        let ranFlipVal = Math.ceil(Math.random() * 6);
        if (oppFlipped.includes(ranFlipVal)) {;}
        else {
            oppFlipped.push(ranFlipVal);
            ranFlipID = "pc" + ranFlipVal;
            document.getElementById(ranFlipID).src = "PNG/" + cards[ranFlipVal+5] + ".png";
            oppCardsFlipped = oppCardsFlipped + 1;}
    }
    playerTurn = true;
}

function flipCard(cardClicked, cardNumber) {
    document.getElementById(cardClicked).src = "PNG/" + cards[cardNumber] + ".png"
}

function flipNewAvailable() {
    i = i +1;
    available.src = "PNG/" + cards[i] + ".png";
}