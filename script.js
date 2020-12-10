const container = document.querySelector('.container');

// Keep track of different basketballs being created
let ballCount = 1;

// Listen for click events on the window
window.addEventListener('click', e => {
	// Create new elements for the div and basketball image
	const ball = document.createElement('div');
	const image = document.createElement('img');

	// Set the src and alt for image
	image.setAttribute('src', './basketball.png');
	image.setAttribute('alt', 'basketball');

	// Add the class list and id to the ball div
	ball.classList.add('ball');
	ball.id = 'ball' + ballCount;

	// Append the image as a child on ball
	ball.appendChild(image);

	// Get the position clicked on the window
	const screenHeight = e.view.innerHeight;
	const bottom = screenHeight - e.y - 50;

	// Get the starting position of new ball
	ball.style.bottom = `${bottom}px`;
	ball.style.left = `${e.clientX - 50}px`;

	// Append the ball div as a child to the container
	container.appendChild(ball);

	// Bounce up animation
	const bounceUp = anime({
		autoplay: false,
		targets: '#ball' + ballCount,
		translateY: {
			value: [bottom, 0],
			duration: 575,
			easing: 'easeOutQuad',
		},
		complete: function () {
			bounceDown.restart();
		},
	});

	// Bounce down animation
	const bounceDown = anime({
		autoplay: false,
		targets: '#ball' + ballCount,
		translateY: {
			value: [0, bottom],
			duration: 575,
			easing: 'easeInQuad',
		},
		complete: function () {
			bounceUp.restart();
		},
	});

	// Start the animation
	bounceDown.play();

	// Increase the ball count for next ball ID
	ballCount++;
});
