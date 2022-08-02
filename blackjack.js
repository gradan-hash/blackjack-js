


let cards = [] //ordered list
let sum =0

let hasblackjack =false
let isAlive = false

let message ="" 
let sumE = "Sum : "

function Player(){
	let playerObject = {
	name: "Cornelius",
	chip: 45
}

document.getElementById('player-el').textContent = "Details : " + playerObject.name + " : $ " + playerObject.chip
}






function getRandomNumber(){
	let randomnumber = Math.floor(Math.random() *13 ) +1
	if(randomnumber > 10){
		return 10
	}else if(randomnumber === 1){
		return 11
	}else{return randomnumber}
}


function startGame(){
	isAlive = true
	
	let firstCard = getRandomNumber()
	let secondCard = getRandomNumber()
	cards = [firstCard,secondCard] //ordered list
	sum =firstCard +secondCard
	renderGame()
}

function renderGame() {
	let cardEl = document.getElementById('card-el')
	cardEl.textContent = "Cards: "

	 for(let i= 0; i < cards.length; i++){

		 document.getElementById('card-el').textContent += cards[i] + " "
	 	}

	 	document.querySelector('#sum-el').textContent= sumE + sum
 
	 if (sum <= 20){

	message="Do you want to draw  new card "

	}
	 
	 else if(sum === 21){
	 	message= "You've got blackjack"

	 	hasblackjack = true
	 }

	 else{
	 message= "you are out of the game"
	 	isAlive=false
	 }
	 document.getElementById('message-el').textContent =message
}
function newcard() {
	if (isAlive=== true && hasblackjack===false){
		let card = getRandomNumber()
		sum += card

		cards.push(card)
		renderGame()

	}
		

	}


//methods
//functions attached to a object
let personObject = {
	name: "Cornelius",
	age: 21,
	country:"kenya"
}

function logdata(){
	console.log(personObject.name + " is " + personObject.age + " years old " + " lives in " + personObject.country)


}
logdata()

// array ,datastructure, and looped proggrammer
let countries = ["turcalun","india","usa","indonesia","monaco"]
	
	countries.shift()
	countries.pop()
	console.log(countries)
	countries.unshift("pakistan")
	countries.push("china")
	console.log(countries)
for(let i = 0; i <countries.length; i++){
	console.log(countries[i])
}
//random numbers



// let hands = ["rocks","paper","scissors"]
// function getRandomHands(){

// 	let random =Math.floor (Math.random() * 3) 
// 	return hands[random]
	
// }
// console.log(getRandomHands())