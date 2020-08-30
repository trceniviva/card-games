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
let availableCard = "";

let cardInHand = "";

// Elements holding Player's cards
var pl1 = document.getElementById("pl1");
var pl2 = document.getElementById("pl2");
var pl3 = document.getElementById("pl3");
var pl4 = document.getElementById("pl4");
var pl5 = document.getElementById("pl5");
var pl6 = document.getElementById("pl6");

// Elements holding PC's cards
var pc1 = document.getElementById("pc1");
var pc2 = document.getElementById("pc2");
var pc3 = document.getElementById("pc3");
var pc4 = document.getElementById("pc4");
var pc5 = document.getElementById("pc5");
var pc6 = document.getElementById("pc6");

// Variables to hold the current value of the cards on the table
let player = {
    card1: "1",
    card2: "2",
    card3: "3",
    card4: "4",
    card5: "5",
    card6: "6",
    firstcolmatch: false,
    secondcolmatch: false,
    thirdcolmatch: false,
    score: 0
}

let computer = {
    card1: "1",
    card2: "2",
    card3: "3",
    card4: "4",
    card5: "5",
    card6: "6",
    firstcolmatch: false,
    secondcolmatch: false,
    thirdcolmatch: false,
    score: 0
}

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
    resetPlayers() ;
    unpairAllCards();
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
    checkForMatches();
}

function handleCardClick(cardClicked, cardNumber) {
    if (cardInHand != "") {
        document.getElementById(cardClicked).src = "PNG/" + cardInHand + ".png";
        if (cardClicked === 'pl1') {player.card1 = cardInHand.split(/\s*\-\s*/g)[0]};
        if (cardClicked === 'pl2') {player.card2 = cardInHand.split(/\s*\-\s*/g)[0]};
        if (cardClicked === 'pl3') {player.card3 = cardInHand.split(/\s*\-\s*/g)[0]};
        if (cardClicked === 'pl4') {player.card4 = cardInHand.split(/\s*\-\s*/g)[0]};
        if (cardClicked === 'pl5') {player.card5 = cardInHand.split(/\s*\-\s*/g)[0]};
        if (cardClicked === 'pl6') {player.card6 = cardInHand.split(/\s*\-\s*/g)[0]};
        flipNewAvailable();
        checkForMatches();
        cardInHand = "";
    } else {


    if (playerCardsFlipped < 2) {
        document.getElementById(cardClicked).src = "PNG/" + cards[cardNumber] + ".png";
        playerTurn = false;
        playerCardsFlipped = playerCardsFlipped + 1;
    } else if (playerCardsFlipped < 5) {
        document.getElementById(cardClicked).src = "PNG/" + cards[cardNumber] + ".png";
        available.src = "PNG/" + cards[i] + ".png";
        availableCard = cards[i];
        playerCardsFlipped = playerCardsFlipped + 1;
        playerTurn = false;
        flipOppCards();
    } else {
        document.getElementById(cardClicked).src = "PNG/" + cards[cardNumber] + ".png";
    }
    if (cardClicked === 'pl1') {player.card1 = cards[0].split(/\s*\-\s*/g)[0]};
    if (cardClicked === 'pl2') {player.card2 = cards[1].split(/\s*\-\s*/g)[0]};
    if (cardClicked === 'pl3') {player.card3 = cards[2].split(/\s*\-\s*/g)[0]};
    if (cardClicked === 'pl4') {player.card4 = cards[3].split(/\s*\-\s*/g)[0]};
    if (cardClicked === 'pl5') {player.card5 = cards[4].split(/\s*\-\s*/g)[0]};
    if (cardClicked === 'pl6') {player.card6 = cards[5].split(/\s*\-\s*/g)[0]};
    checkForMatches();}
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
            if (ranFlipVal === 1) {computer.card1=cards[ranFlipVal+5].split(/\s*\-\s*/g)[0]};
            if (ranFlipVal === 2) {computer.card2=cards[ranFlipVal+5].split(/\s*\-\s*/g)[0]};
            if (ranFlipVal === 3) {computer.card3=cards[ranFlipVal+5].split(/\s*\-\s*/g)[0]};
            if (ranFlipVal === 4) {computer.card4=cards[ranFlipVal+5].split(/\s*\-\s*/g)[0]};
            if (ranFlipVal === 5) {computer.card5=cards[ranFlipVal+5].split(/\s*\-\s*/g)[0]};
            if (ranFlipVal === 6) {computer.card6=cards[ranFlipVal+5].split(/\s*\-\s*/g)[0]};
    }
    playerTurn = true;
    checkForMatches();
}

function flipCard(cardClicked, cardNumber) {
    document.getElementById(cardClicked).src = "PNG/" + cards[cardNumber] + ".png"
}

function checkForMatches() {
    if (computer.card1===computer.card4) {
        computer.firstcolmatch = true;
        pc1.classList.add("card-paired-top")
        pc4.classList.add("card-paired-bottom")}
    if (computer.card2===computer.card5) {
        computer.secondcolmatch = true;
        pc2.classList.add("card-paired-top")
        pc5.classList.add("card-paired-bottom")}
    if (computer.card3===computer.card6) {
        computer.thirdcolmatch = true;
        pc3.classList.add("card-paired-top")
        pc6.classList.add("card-paired-bottom")}
    if (player.card1===player.card4) {
        player.firstcolmatch = true;
        pl1.classList.add("card-paired-top")
        pl4.classList.add("card-paired-bottom")}
    if (player.card2===player.card5) {
        player.secondcolmatch = true;
        pl2.classList.add("card-paired-top")
        pl5.classList.add("card-paired-bottom")}
    if (player.card3===player.card6) {
        player.thirdcolmatch = true;
        pl3.classList.add("card-paired-top")
        pl6.classList.add("card-paired-bottom")}
}

function flipNewAvailable() {
    i = i +1;
    available.src = "PNG/" + cards[i] + ".png";
    availableCard = cards[i];
}

function unpairAllCards() {
    pc1.classList.remove("card-paired-top")
    pc2.classList.remove("card-paired-top")
    pc3.classList.remove("card-paired-top")
    pc4.classList.remove("card-paired-bottom")
    pc5.classList.remove("card-paired-bottom")
    pc6.classList.remove("card-paired-bottom")
    pl1.classList.remove("card-paired-top")
    pl2.classList.remove("card-paired-top")
    pl3.classList.remove("card-paired-top")
    pl4.classList.remove("card-paired-bottom")
    pl5.classList.remove("card-paired-bottom")
    pl6.classList.remove("card-paired-bottom")
}

function opponentTurn() {
    
}

function resetPlayers() {
    player = {
        card1: "1",
        card2: "2",
        card3: "3",
        card4: "4",
        card5: "5",
        card6: "6",
        score: 0
    }
    
    computer = {
        card1: "1",
        card2: "2",
        card3: "3",
        card4: "4",
        card5: "5",
        card6: "6",
        score: 0
    }
}

function takeAvailable() {
    cardInHand = availableCard;
}