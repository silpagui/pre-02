const button = document.querySelector(".view-work-btn");

const ourWorkSection = document.querySelector(".our-work");

const ourWorkPositionY = ourWorkSection.getBoundingClientRect().top;

const upButton = document.querySelector(".up-button");

button.addEventListener("click", (event) => {
	event.preventDefault();
	window.scroll({
		top: ourWorkPositionY,
		behavior: "smooth",
	});
});

window.addEventListener("scroll", (event) => {
	if (window.scrollY >= ourWorkPositionY) {
		upButton.classList.add("show-button");
	} else {
		upButton.classList.remove("show-button");
	}
});

upButton.addEventListener("click", () => {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
});
