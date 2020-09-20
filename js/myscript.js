
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
	const Nav = document.querySelector('header nav');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		Nav.classList.toggle('active');
	});
}


$(function () {
	$("body").removeClass("preload");

	// JQueryの範囲

	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 500) {
				$('#pagetop').fadeIn('fast');
				$('header').addClass('active');
			} else {
				$('#pagetop').fadeOut('fast');
				$('header').removeClass('active');
		}
	});
	$('header nav li a').on('click',function(){
		$('header nav').removeClass('active');
		$('header .menu_open').removeClass('active');
	});

	// スムーススクロール 
	var urlHash = location.hash;
	if (urlHash) {
		$('body,html').stop().scrollTop(0);
		setTimeout(function () {
			var target = $(urlHash);
			var position = target.offset().top;
			$('body,html').stop().animate({ scrollTop: position }, 500);
		}, 100);
	}
	$('a[href^="#"]').click(function () {
		var href = $(this).attr("href");
		var target = $(href);
		var position = target.offset().top;
		$('body,html').stop().animate({ scrollTop: position }, 500);
	});

	// 個人スポンサーのスライダー
	var swiperMain = new Swiper('.top06 .swiper-container', {
		loop: true,
		speed: 1000,
		slidesPerView: 3,
		spaceBetween: 30,
		centeredSlides : true,
		breakpoints: {
			767: {
				slidesPerView: 1,
			}
		},
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});
	// 個人スポンサー：個人名をクリックしたら、該当スライドに移動する
	$('.top06 .txt_links a').on('click',function(){
		var index = $(this).index() + 1;
		console.log(index);
		swiperMain.slideTo(index);
	});
});