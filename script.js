// You can add custom JavaScript for interactions, such as showing alerts or changing styles dynamically

document.querySelector('.explore-btn').addEventListener('click', function() {
    alert('Happy Halloween! Get ready for some spooky fun!');
});
function playHalloweenAudio() {
    const audio = new Audio('horror-music-scary-creepy-dark-ambient-cinematic-lullaby-115049.mp3'); // Add quotes around the file name
    audio.loop = true;
    audio.play();
}
window.addEventListener('load', playHalloweenAudio);

// Add an event listener to the "Home" link in the navigation bar
document.getElementById('nav-home').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    window.location.reload(); // Reloads the current page
});
