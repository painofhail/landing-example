// https://splidejs.com/options/

new Splide( '.splide', {
	rewind : true,
	speed: 400,
	heightRatio: 0,
	start: 0,
	arrows : true,
	'arrowPath':
		'M34.15 17.435L17.073 34.594l-1.642-1.65 14.27-14.34H0V16.27h29.705L15.432 1.925l1.641-1.65 17.076 17.16z',
	classes: {
		arrows			: 'splide__arrows',
		arrow 			: 'splide__arrow slider__arrow',
		prev  			:	'splide__arrow--prev',
		next  			: 'splide__arrow--next',
		pagination	: 'slider__pagination',
		page      	: 'slider__pagination-item',
	},
	gap: '1rem',
	pagination: true,
	autoplay: false,
	keyboard: 'focused',
	drag: true,
	direction: 'ltr'
}).mount();
