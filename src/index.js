import "../node_modules/slick-carousel/slick/slick.scss";
import "../node_modules/slick-carousel/slick/slick-theme.scss";
import "./styles/style.scss";

const discount = $(".discount");
const discountClose = $("#discount-close");

if (discount && discountClose) {
	discountClose.on("click", () => {
		discount.css("display", "none");
	});
}

const reviewSlider = $("#review-slider");
const reviewSliderPrev = $("#review-slider-prev");
const reviewSliderNext = $("#review-slider-next");

if (reviewSlider && reviewSliderPrev && reviewSliderNext) {
	reviewSlider.slick({
		autoplay: true,
		autoplaySpeed: 5000,
		centerMode: true,
		prevArrow: reviewSliderPrev,
		nextArrow: reviewSliderNext,
		slidesToShow: 3,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});
}

const burgerBtn = document.getElementById("burger");
const closeBurgerBtn = document.getElementById("close-burger");
const mobileMenu = document.getElementById("mobile-menu");

if (burgerBtn && mobileMenu) {
	$(burgerBtn).on("click", () => {
		$(mobileMenu).addClass('active');
	});
}

if (closeBurgerBtn && mobileMenu) {
	$(closeBurgerBtn).on("click", () => {
		$(mobileMenu).removeClass('active');
	});
}
