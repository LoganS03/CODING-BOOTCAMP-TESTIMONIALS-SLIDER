let sliderText = document.querySelectorAll(".slider .text div")
let sliderImg = document.querySelectorAll(".slider .image img")
let buttons = document.querySelectorAll(".buttons svg")

let i = 0

function displayContent(index){
	sliderText.forEach((text) => {
		text.classList.remove("active")
	});
	sliderText[index].classList.add("active")

    sliderImg.forEach((img) => {
		img.classList.remove("active")
	});
	sliderImg[index].classList.add("active")
}

function nextSlide () {
	i++;
	if (i > sliderText.length - 1) {
		i = 0;
	}
	displayContent(i);
}
function prevSlide () {
	i--;
	if (i < 0) {
		i = sliderText.length - 1;
	}
	displayContent(i);
}

buttons[1].addEventListener('click', nextSlide);
buttons[0].addEventListener('click', prevSlide);