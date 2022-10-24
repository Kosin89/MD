const hamburger = document.querySelector(".nav__hamburger")
const navMenu = document.querySelector(".nav__menu")

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

var swiper = new Swiper(".team-slider", {
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

// let section = document.querySelector(".container");
// let stat = document.querySelectorAll(".stats .sta");
// let start = false;

// window.onscroll = function(){
//     if(window.scrollY >= section.offsetTop){
//         if(!start){
//             stat.forEach((sta) => startCount(sta));
//         }
//         start = true;
//     }
// }

// function startCount(el){
//     let max = el.dataset.max;
//     let count = setInterval(() => {
//         el.textContent++;
//         if(el.textContent == max) {
//             clearInterval(count);
//         }
//     }, 500 / stat);
// }
