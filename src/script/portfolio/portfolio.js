btnAll = document.querySelector('#btn-All');
btnBranding = document.querySelector('#btn-Branding');
btnPhotography = document.querySelector('#btn-Photography');
btnIllustration = document.querySelector('#btn-Illustration');

portfolioImages = document.querySelector('.portfolio__images');

btnShowAll = document.querySelector('portfolio__show-all');

const initialNumOfImages = 9;
appendImages(initialNumOfImages);

const baseWidth = 340;

function appendImages(num) {
	for (let i = 0; i < num; i++) {
		const item = document.createElement('div');
		item.classList.add('portfolio__image');
			const image = document.createElement('img');
			image.setAttribute('src', `https://via.placeholder.com/${baseWidth + 'x' + getRandomSize()}`);
		item.append(image);

			const body = document.createElement('div');
			body.classList.add('portfolio__image-body');
				const title = document.createElement('div');
				title.classList.add('portfolio__image-title');
				title.innerHTML = `Title ${i}`
			body.append(title);

			const dsc = document.createElement('div');
				dsc.classList.add('portfolio__image-description');
				dsc.innerHTML = `Description ${i}`
			body.append(dsc);
		item.append(body);
		portfolioImages.append(item);
	}

	function getRandomSize () {
		const min = 200;
		const max = 500;
		return (Math.random()*(max - min) + min).toFixed(0);
	}
}

// One picture
/*
<div class="portfolio__image">
	<div class="portfolio__image-title">OCCA CUPIDATA</div>
	<div class="portfolio__image-description">DESIGN</div>
</div>
*/
