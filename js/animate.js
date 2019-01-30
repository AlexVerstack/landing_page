$(function() {
	let nav = $('.header-nav__link');
	let navMenu = $('.header-nav__menu--link');

	navMenu.on('click',function(event){
		event.preventDefault();
		let target = $(this).attr('href');
		let top = $(target).offset().top;
		$('html,body').animate({'scrollTop' : top},1000);
	});
	
	nav.on('click',function(event){
		event.preventDefault();
		let target = $(this).attr('href');
		let top = $(target).offset().top;
		$('html,body').animate({'scrollTop' : top},1000);
	});
});