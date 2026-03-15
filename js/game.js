const board = document.getElementById("gameBoard")
const movesDisplay = document.getElementById("moves")
const timerDisplay = document.getElementById("timer")
const winMessage = document.getElementById("winMessage")

let icons = [
"⚽","🎮","🚀","💻",
"📱","🎧","🖥️","🧠",
"⚽","🎮","🚀","💻",
"📱","🎧","🖥️","🧠"
]

let first = null
let second = null
let moves = 0
let matches = 0
let timer = 0
let interval

function startTimer(){
interval = setInterval(()=>{
timer++
timerDisplay.innerText = timer
},1000)
}

function createBoard(){

board.innerHTML=""
icons.sort(()=>0.5 - Math.random())

icons.forEach(icon=>{

const card = document.createElement("div")
card.classList.add("card")
card.dataset.icon = icon

card.onclick = () => {

if(card.classList.contains("flipped") || second) return

if(timer === 0 && moves === 0) startTimer()

card.innerText = icon
card.classList.add("flipped")

if(!first){
first = card
}
else{

second = card
moves++
movesDisplay.innerText = moves

if(first.dataset.icon === second.dataset.icon){

matches++
first=null
second=null

if(matches === 8){
clearInterval(interval)
winMessage.innerText = "🎉 You Won the Game!"
}

}
else{

setTimeout(()=>{

first.innerText=""
second.innerText=""

first.classList.remove("flipped")
second.classList.remove("flipped")

first=null
second=null

},700)

}

}

}

board.appendChild(card)

})

}

function restartGame(){

first=null
second=null
moves=0
matches=0
timer=0

movesDisplay.innerText=0
timerDisplay.innerText=0
winMessage.innerText=""

clearInterval(interval)

createBoard()

}

createBoard()
