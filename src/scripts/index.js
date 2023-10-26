import '../styles/index.scss';
if (process.env.NODE_ENV === 'development') {
	require('../index.html');
}

window.addEventListener('DOMContentLoaded', function () {
	'use strict';
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		slidesPerView: 4,
		spaceBetween: 10,
		loop: true,
		swiperScrollbar: false,
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 0
			},

			640: {
				slidesPerView: 2,
				spaceBetween: 12
			},

			769: {
				slidesPerView: 3,
				spaceBetween: 12
			},

			900: {
				slidesPerView: 4,
				spaceBetween: 20
			},
		}
	  });

});
