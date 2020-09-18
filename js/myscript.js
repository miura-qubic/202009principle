
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
		} else {
				$('#pagetop').fadeOut('fast');
		}
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


});