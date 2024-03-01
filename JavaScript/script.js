// Wait for the page to load
window.addEventListener('load', function () {
    // After 3 seconds, hide the preloader
    setTimeout(function () {
        document.querySelector('.preloader').style.display = 'none';
    }, 2500); // 3000 milisekundi = 3 sekunde
});

  
// Dohvaćanje gumba za drop-down izbornik
var dropdownBtn = document.getElementById("dropdown-btn");
var dropdownContent = document.getElementById("dropdown-content");

// Dodavanje event listenera za klik na gumb
dropdownBtn.addEventListener("click", function() {
    // Provjera veličine prozora prije prikazivanja/skrivanja padajućeg izbornika
    if (window.innerWidth <= 992) {
        // Promjena prikaza drop-down izbornika
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    }
});

// Provjera veličine prozora nakon promjene veličine prozora
window.addEventListener('resize', function() {
    // Ako se prozor poveća na širinu veću od 992 piksela, sakrijte padajući izbornik
    if (window.innerWidth > 992) {
        dropdownContent.style.display = "none";
    }
});





