// Anime JS
const links = document.querySelectorAll('nav a')
links.forEach((link, index) => {
	anime({
		targets: link,
		opacity: 1,
		translateX: ['20px', '0px'],
		delay: index * 100,
		easing: 'easeInOutQuad'
	})
})

function onActive(id) {
	var navLinks = document.querySelectorAll('nav a');


	for (var i = 0; i < navLinks.length; i++) {
		// Remove the "active" class from all links
		navLinks[i].classList.remove('active');
	}
	document.getElementById(id).classList.add('active');
}
// display products with animation
const images = document.querySelectorAll('.products-list .bg-img')
images.forEach((image, index) => {
	anime({
		targets: image,
		opacity: 1,
		translateY: ['-20px', '0px'],
		delay: index * 100,
		easing: 'easeInOutQuad'
	})
})