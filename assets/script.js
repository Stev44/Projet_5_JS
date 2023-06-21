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


const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');
const image = document.getElementById ('slide')
const tagLine = document.getElementById ('tagLine')
const src = image.getAttribute('src')
const dot = document.getElementsByClassName('dot')
let p = 0;

function nextSlide() {
	p++;
	p = p%slides.length
	updateSlide(p);

	for (i = 0; i < dot.length; i++){

	if(dot[i].getAttribute('data-clic')-1 === p){
		dot[i].classList.add('dot_selected');
	}else {
		dot[i].classList.remove('dot_selected');
	}

	}
}

function previousSlide() {
	p--;
	p = p%slides.length

	if (p < 0){
		p = slides.length-1
	}
	updateSlide(p);

	for (i = 0; i < dot.length; i++){
		
		if(dot[i].getAttribute('data-clic')-1 === p){
			dot[i].classList.add('dot_selected');
		}else {
			dot[i].classList.remove('dot_selected');
		}
	
		}
}

function updateSlide(index) {
	const imageName = slides[index].image
	const tagLineName = slides[index].tagLine
	tagLine.innerHTML = tagLineName
	

	const lastSlashIndex = src.lastIndexOf("/");
	const relativePathWithoutImgName = src.slice(0, lastSlashIndex + 1);
	const relativePathImg = relativePathWithoutImgName.concat(imageName);
	image.setAttribute('src', relativePathImg)
}


arrowLeft.addEventListener('click', previousSlide)

arrowRight.addEventListener('click', nextSlide)






