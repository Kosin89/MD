let hamburger = document.querySelector(".nav__hamburger")
let navMenu = document.querySelector(".nav__menu")

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active")
	navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav__link").forEach(n =>
	n.addEventListener("click", () => {
		hamburger.classList.remove("active")
		navMenu.classList.remove("active")
	})
)




let swiper = new Swiper(".team-slider", {
	loop: true,
	grabCursor: true,
	spaceBetween: 20,
	navigation: {
		nextEl: ".portfolio__swiper--next",
		prevEl: ".portfolio__swiper--prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
})


let typed = new Typed(".auto-type", {
	strings: ["Hola", "Cześć", "Hello"],
	typeSpeed: 120,
	backSpeed: 120,
	loop: true,
})



