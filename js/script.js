// const toggle = document.getElementById("toggleMode")

// toggle.onclick = () => {

// document.body.classList.toggle("light")

// if(document.body.classList.contains("light")){
// toggle.classList.replace("fa-moon","fa-sun")
// }
// else{
// toggle.classList.replace("fa-sun","fa-moon")
// }

// }



const darkBtn = document.getElementById("darkBtn");
const lightBtn = document.getElementById("lightBtn");

darkBtn.onclick = () => {
document.body.classList.remove("light");
}

lightBtn.onclick = () => {
document.body.classList.add("light");
}