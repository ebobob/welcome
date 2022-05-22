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
		speed: 800,
		easing: 'ease',
		centerMode: true,
		responsive: [
			{
				breakpoint: 1088,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	$(".teacher_slider .slider__item").on("click", function () {
		const index = $(this).attr("data-slick-index");
		$(".teacher_slider").slick("slickGoTo", index);
	});
	$("#btn").click(function () {
		$('html, body').animate({
			scrollTop: $(".form").offset().top
		}, 1100);
	});
});
AOS.init();