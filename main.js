
document.querySelector(".menu-toggle").addEventListener("click", function() {
var nav = document.querySelector("nav");
if (nav.style.display === "none") {
    nav.style.display = "block";
} else {
    nav.style.display = "none";
}
});




document.querySelectorAll("nav a").forEach(function(navLink) {
    navLink.addEventListener("click", function(event) {
        event.preventDefault(); // prevent the default action
        var target = document.querySelector(this.getAttribute('href')); // get the target element

        // Get the height of the header
        var headerHeight = document.querySelector('header').offsetHeight;

        // Calculate the position to scroll to by subtracting the header height from the target element's top position
        var positionToScrollTo = target.offsetTop - headerHeight;

        // Scroll to the new position
        window.scrollTo({ top: positionToScrollTo, behavior: 'smooth' });

        // Only hide the navigation menu if the viewport width is <= 600px
        if (window.innerWidth <= 600) {
            document.querySelector("nav").style.display = "none";
        }
    });
});


