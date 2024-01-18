let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 0.25 + 'px';
})

var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var keyHandler = function (event) {

	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current) {
		current = 0;
		window.location.href = 'jeu.html';
	}

};

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);

function redirectToMembersPage(x) {
  // Utilisez window.location.href pour rediriger vers members.html
  window.location.href = x;
}

var audio = document.getElementById("audio");
var glacon = document.getElementById("glacon");

function startAnimation() {
  glacon.style.opacity = 0;
  audio.play();
  setTimeout(function() {
    resetAnimation();
  }, 25000); // Disparition totale après 25 secondes
}

function resetAnimation() {
  glacon.style.opacity = 1;
  audio.pause();
  audio.currentTime = 0;
}