const navItem = document.querySelectorAll('.menu__link');

navItem.forEach(item => {
	item.addEventListener('click', (event) => {
		event.preventDefault();

		const href = item.getAttribute('href');
		const section = document.querySelector(`${href}`);
		window.scrollTo({
			top: section.offsetTop,
			behavior: 'smooth',
		});

		history.pushState(null, null, `/${href}`)
	});
});
