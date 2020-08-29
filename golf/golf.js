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
let players = 2;
var pl1 = document.getElementById("pl-1");
var pl2 = document.getElementById("pl-2");
var pl3 = document.getElementById("pl-3");
var pl4 = document.getElementById("pl-4");
var pl5 = document.getElementById("pl-5");
var pl6 = document.getElementById("pl-6");
var pc1 = document.getElementById("pc-1");
var pc2 = document.getElementById("pc-2");
var pc3 = document.getElementById("pc-3");
var pc4 = document.getElementById("pc-4");
var pc5 = document.getElementById("pc-5");
var pc6 = document.getElementById("pc-6");
const deck = document.getElementById("deck");
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

function placeCards() {
    shuffle(cards);
    pl1.src = "PNG/" + cards[0] + ".png";
    pl2.src = "PNG/" + cards[1] + ".png";
    pl3.src = "PNG/" + cards[2] + ".png";
    pl4.src = "PNG/" + cards[3] + ".png";
    pl5.src = "PNG/" + cards[4] + ".png";
    pl6.src = "PNG/" + cards[5] + ".png";

    pc1.src = "PNG/" + cards[6] + ".png";
    pc2.src = "PNG/" + cards[7] + ".png";
    pc3.src = "PNG/" + cards[8] + ".png";
    pc4.src = "PNG/" + cards[9] + ".png";
    pc5.src = "PNG/" + cards[10] + ".png";
    pc6.src = "PNG/" + cards[11] + ".png";
}
