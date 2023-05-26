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

const numberOfSlides = slides.length;
const arrowLeft = document.getElementsByClassName ('arrow_left')
const arrowRight = document.getElementsByClassName ('arrow_right')
let position = 0;


if (slides [1]) {

}


function nextSlide () {

if (position === numberOfSlides - 1) {
	position = 0;
} else {
	position ++;
}
}
console.log (nextSlide)

function previousSlide () {
	if (position === 0) {
		position = numberOfSlides -1;
	} else {
		position --;
	}
}

arrowRight.addEventListener('click', nextSlide)
arrowLeft.addEventListener('click', previousSlide)

