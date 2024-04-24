const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides)

//les variables
const dots = document.querySelector(".dots");
let index = 0;
const img = document.getElementById("image");
const tag = document.getElementById("tagLine");
const flecheDroite = document.getElementById("flecheDroite")
const flecheGauche = document.getElementById("flecheGauche")



//Les points
function afficherPoints() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		if (i == index) {
			dot.classList.add("dot_selected");
		}
	}
}
afficherPoints()



//clique droit
function cliqueDroit() {
	flecheDroite.addEventListener("click",()=>{
		const tableauPoints = document.querySelectorAll(".dots .dot")
		tableauPoints[index].classList.remove("dot_selected")
		index++;
		if (index > slides.length -1) {
			index = 0;
		}
		tableauPoints[index].classList.add("dot_selected")
		img.src = "./assets/images/slideshow/" + slides[index].image;
		tag.innerHTML = slides[index].tagLine;
		
	})
}
cliqueDroit();
 

//clique gauche
function cliqueGauche() {
	flecheGauche.addEventListener("click",()=>{
		const tableauPoints = document.querySelectorAll(".dots .dot")
		tableauPoints[index].classList.remove("dot_selected")
		index--;
		if (index < 0) {
			index = slides.length - 1;
		}
		tableauPoints[index].classList.add("dot_selected")
		img.src = "./assets/images/slideshow/" + slides[index].image;
		tag.innerHTML = slides[index].tagLine;
		
	})
}
cliqueGauche();
 