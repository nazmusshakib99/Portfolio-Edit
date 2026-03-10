// const board = document.getElementById("gameBoard")

// const icons = [
// "⚽","🎮","🚀","💻",
// "⚽","🎮","🚀","💻"
// ]

// icons.sort(()=>0.5-Math.random())

// let first = null
// let second = null

// icons.forEach(icon=>{

// const card = document.createElement("div")
// card.classList.add("card")
// card.dataset.icon = icon

// card.onclick = () => {

// if(card.classList.contains("flipped")) return

// card.innerText = icon
// card.classList.add("flipped")

// if(!first){
// first = card
// }
// else{

// second = card

// if(first.dataset.icon === second.dataset.icon){
// first = null
// second = null
// }
// else{

// setTimeout(()=>{
// first.innerText=""
// second.innerText=""

// first.classList.remove("flipped")
// second.classList.remove("flipped")

// first=null
// second=null
// },800)

// }

// }

// }

// board.appendChild(card)

// })


const board = document.getElementById("gameBoard")

const icons = [

"⚽","🎮","🚀","💻",
"📱","🎧","🖥️","🧠",

"⚽","🎮","🚀","💻",
"📱","🎧","🖥️","🧠"

]

icons.sort(()=>0.5-Math.random())

let first = null
let second = null

icons.forEach(icon=>{

const card = document.createElement("div")
card.classList.add("card")
card.dataset.icon = icon

card.onclick = () => {

if(card.classList.contains("flipped")) return

card.innerText = icon
card.classList.add("flipped")

if(!first){
first = card
}
else{

second = card

if(first.dataset.icon === second.dataset.icon){
first = null
second = null
}
else{

setTimeout(()=>{

first.innerText=""
second.innerText=""

first.classList.remove("flipped")
second.classList.remove("flipped")

first=null
second=null

},800)

}

}

}

board.appendChild(card)

})
