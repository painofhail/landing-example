const up = document.querySelector('.footer__to-top');

up.addEventListener('click', (event) => {
	event.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
})
