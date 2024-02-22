// Wait for the page to load
window.addEventListener('load', function() {
    // After 3 seconds, hide the preloader
    setTimeout(function() {
        document.querySelector('.preloader').style.display = 'none';
    }, 2500); // 3000 milisekundi = 3 sekunde
});

  