// LOAD NAVBAR

fetch("navbar.html")
.then(response => response.text())
.then(data => {

document.getElementById("navbar").innerHTML = data;

// DARK / LIGHT MODE BUTTONS

const darkBtn = document.getElementById("darkBtn");
const lightBtn = document.getElementById("lightBtn");

// LOAD SAVED MODE

if(localStorage.getItem("mode") === "light"){
document.body.classList.add("light");
}

// BUTTON EVENTS

if(darkBtn && lightBtn){

darkBtn.addEventListener("click", () => {
document.body.classList.remove("light");
localStorage.setItem("mode","dark");
});

lightBtn.addEventListener("click", () => {
document.body.classList.add("light");
localStorage.setItem("mode","light");
});

}

})
.catch(error => console.log("Navbar load error:", error));


fetch("footer.html")
.then(res => res.text())
.then(data => {
document.getElementById("footer").innerHTML = data;
});
/* ================================
   IMAGE VIEW MODAL
   (Certificates & Resume)
================================ */

function openModal(imgSrc){

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

if(modal && modalImg){
modal.style.display = "block";
modalImg.src = imgSrc;
}

}

function closeModal(){

const modal = document.getElementById("imageModal");

if(modal){
modal.style.display = "none";
}

}



/* CLOSE MODAL IF CLICK OUTSIDE */

window.onclick = function(event){

const modal = document.getElementById("imageModal");

if(event.target === modal){
modal.style.display = "none";
}

};




/* ==================================
   PROJECT DEMO IMAGE GALLERY
================================== */

let projectImages = [];
let currentImageIndex = 0;

function openDemo(images){

projectImages = images;
currentImageIndex = 0;

const modal = document.getElementById("demoModal");
const img = document.getElementById("demoImage");

if(modal && img){
modal.style.display = "block";
img.src = projectImages[currentImageIndex];
}

}

function closeDemo(){

const modal = document.getElementById("demoModal");

if(modal){
modal.style.display = "none";
}

}

function nextImage(){

currentImageIndex++;

if(currentImageIndex >= projectImages.length){
currentImageIndex = 0;
}

document.getElementById("demoImage").src = projectImages[currentImageIndex];

}

function prevImage(){

currentImageIndex--;

if(currentImageIndex < 0){
currentImageIndex = projectImages.length - 1;
}

document.getElementById("demoImage").src = projectImages[currentImageIndex];

}