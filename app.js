const myArray = [
    {
        name:'mario',
        img:'images/mario.jpg'
    },
    {
        name:'monkey',
        img:'images/monkey.jpg'
    },
    {
        name:'ninja',
        img:'images/ninja.jpg'
    },
    {
        name:'pinkdino',
        img:'images/pinkdino.jpg'
    },
    {
        name:'turtle',
        img:'images/turtle.jpg'
    },
    {
        name:'turtleninja',
        img:'images/turtleninja.jpg'
    },
    {
        name:'mario',
        img:'images/mario.jpg'
    },
    {
        name:'monkey',
        img:'images/monkey.jpg'
    },
    {
        name:'ninja',
        img:'images/ninja.jpg'
    },
    {
        name:'pinkdino',
        img:'images/pinkdino.jpg'
    },
    {
        name:'turtle',
        img:'images/turtle.jpg'
    },
    {
        name:'turtleninja',
        img:'images/turtleninja.jpg'
    },
]
//გამოგვაქვს რანდომად სურათები
myArray.sort(()=> 0.5 - Math.random())
const gridDisplay = document.querySelector('#myDiv');
const result = document.getElementById('result');
let cardsChosen = [];
let cardsChosenIds = [];
let cardsFound = [];

//ვქმნით იმიჯებს , ატრიბუტით ვსორსავთ და ვაჩვენებთ HTML-ში
function createBoard(){
    for(let i = 0 ; i < myArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click',flipCard);
        gridDisplay.append(card)
    }
}
createBoard();

function checkMatch(){
   const cards = document.querySelectorAll('img');// ვირჩევთ ყველა იმიჯს
   const optionOneId = cardsChosenIds[0];
   const optionTwoId =  cardsChosenIds[1];
   if (optionOneId == optionTwoId){
       cards[optionOneId].setAttribute('src','images/blank.png'); //ვადარებთ,თუ იგივეა ვარესეტებთ
       cards[optionTwoId].setAttribute('src','images/blank.png')
       alert("You Clicked Same Image!")
   }
   else if(cardsChosen[0] == cardsChosen[1] ){
        alert("Its a Match!");
        cards[optionOneId].setAttribute('src','images/white.png');//მატჩზე იმიჯის გათეთრება
        cards[optionTwoId].setAttribute('src','images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);         //პოვნის მერე ვაძრობთ ლისენერს
        cards[optionTwoId].removeEventListener('click', flipCard);         //პოვნის მერე ვაძრობთ ლისენერს
        cardsFound.push(cardsChosen);
    }else{
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
    }
    cardsChosen = [];
    cardsChosenIds = [];
    result.innerHTML = cardsFound.length;
    if (cardsFound.length === myArray.length/2){
        result.textContent = 'Congratulations! You have won!!';
    }
}

//იმიჯებს სათითაოდ ვანიჭებთ ატრიბუტს;
//კლიკზე ვიგებთ იმიჯის სახელს , ინდექსს  და ვფუშავთ;
//ატრიბუტით და აიდით ვაჩვენებთ იმიჯებს

function flipCard(){
   const cardId = this.getAttribute('data-id')
    cardsChosen.push(myArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src',myArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}