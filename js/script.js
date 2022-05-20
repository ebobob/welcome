$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		Infinity: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
	});
	$('.teacher_slider').slick({
		adaptiveHeight: true,
		slidesToShow: 3,
		speed: 650,
		easing: 'ease',
		centerMode: true,
	});
	$(".teacher_slider .slider__item").on("click", function () {
		const index = $(this).attr("data-slick-index");
		$(".teacher_slider").slick("slickGoTo", index);
	});
	$(".main__btn").click(function () {
		$(".main").click(function () {
			$('html, body').animate({
				scrollTop: $(".form").offset().top
			}, 1100);
		});
	});
});
AOS.init();
