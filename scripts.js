document.addEventListener("DOMContentLoaded", function () {
	// Smooth scrolling for anchor links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			document.querySelector(this.getAttribute("href")).scrollIntoView({
				behavior: "smooth",
			});
		});
	});

	// Burger menu toggle
	const burgerMenu = document.getElementById("burger-menu");
	const navMobile = document.getElementById("nav-mobile");

	burgerMenu.addEventListener("click", function () {
		burgerMenu.classList.toggle("open");
		navMobile.classList.toggle("open");
		document.body.classList.toggle("no-scroll");
	});

	// Close mobile menu on link click
	document.querySelectorAll("#nav-mobile a").forEach((link) => {
		link.addEventListener("click", function () {
			burgerMenu.classList.remove("open");
			document.body.classList.remove("no-scroll");
		});
	});

	// Initialize ScrollReveal for smooth reveal animations
	ScrollReveal().reveal("[data-sr-id]", {
		duration: 1000,
		distance: "20px",
		delay: 200,
	});

	// Add active class to navigation items
	document.querySelectorAll(".nav-item a").forEach((item) => {
		item.addEventListener("click", function () {
			document.querySelectorAll(".nav-item a").forEach((link) => {
				link.classList.remove("active");
			});
			this.classList.add("active");
		});
	});
});
