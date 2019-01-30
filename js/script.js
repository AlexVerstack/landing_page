let btn = document.getElementById('button-menu');
let menu = document.getElementById('menu');
let images = document.querySelectorAll('.wrapper-works__images--img');
let btn_prev = document.querySelector('.prev-click__img');
let btn_next = document.querySelector('.next-click__img');
let dots = document.querySelectorAll('.slider-dots__dot');



btn.addEventListener("click", function() {
	this.classList.toggle('active');
	menu.classList.toggle('responsive');
});

(function (){
let i = 0;

btn_next.addEventListener('click', function() {
	images[i].classList.remove('showed');
	images[i].classList.remove('fade');
	dots[i].classList.remove('active-dot');
	i++;
	if(i > images.length-1) {
		i = 0;
	}
	images[i].classList.add('showed');
	images[i].classList.add('fade');
	dots[i].classList.add('active-dot');
});


btn_prev.addEventListener('click', function() {
	images[i].classList.remove('showed');
	images[i].classList.remove('fade');
	dots[i].classList.remove('active-dot')
	i--;
	if(i < 0) {
		i = images.length-1;
	}
	images[i].classList.add("showed");
	images[i].classList.add('fade');
	dots[i].classList.add('active-dot');
});

}());








