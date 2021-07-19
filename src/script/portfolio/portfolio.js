portfolioImages = document.querySelector('.portfolio__images');

const initialAmountOfImages = 10;																	// initial amount of images
const baseWidth = 340;																						// base width of images
let count = 1; 																										// number of image title and description

// Load initial amount of images
appendImages(initialAmountOfImages);

// Load another 20 images and remove button
btnShowAll = document.querySelector('.portfolio__show-all');
btnShowAll.addEventListener('click', () => {
	appendImages(20);
	btnShowAll.remove();
});

function appendImages(num) {
	// 	html-structure
	// 	<div class="portfolio__image">
	//		<img src="" alt="">
	//		<div class="portfolio__image-body">
	//			<div class="portfolio__image-title"></div>
	//			<div class="portfolio__image-description"></div>
	//		</div>
	// 	</div>

	for (let i = 0; i < num; i++) {
		const item = document.createElement('div');
		item.classList.add('portfolio__image');
			const image = document.createElement('img');
			image.setAttribute('src', `https://via.placeholder.com/${baseWidth + 'x' + getRandomNumber(200, 500)}`);
			image.setAttribute('alt', `Image ${count}`);
		item.append(image);

			const body = document.createElement('div');
			body.classList.add('portfolio__image-body');
				const title = document.createElement('div');
				title.classList.add('portfolio__image-title');
				title.innerHTML = `Title ${count}`
			body.append(title);

			const dsc = document.createElement('div');
				dsc.classList.add('portfolio__image-description');
				dsc.innerHTML = `Description ${count}`
			body.append(dsc);
		item.append(body);
		portfolioImages.append(item);
		count++;
	}
}

function getRandomNumber (min, max) {
	return (Math.random()*(max - min) + min).toFixed(0);
}
