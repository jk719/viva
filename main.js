// Function to handle internal link navigation with smooth scrolling
function handleInternalLinkClick(event) {
    var target = this.getAttribute('href');

    if (target.startsWith("#")) {
        event.preventDefault();

        target = document.querySelector(target);
        if (!target) return; // Exit if target doesn't exist

        var headerHeight = document.querySelector('header').offsetHeight;
        var positionToScrollTo = target.offsetTop - headerHeight;

        window.scrollTo({ top: positionToScrollTo, behavior: 'smooth' });

        if (window.innerWidth <= 600) {
            document.querySelector("nav").style.display = "none";
        }
    }
}

// Function to handle menu toggle on mobile devices
function toggleMenu() {
    var nav = document.querySelector("nav");
    var header = document.querySelector("header");

    if (!nav || !header) return; // Exit if nav or header doesn't exist

    var headerBgColor = window.getComputedStyle(header).getPropertyValue('background-color');
    nav.style.backgroundColor = headerBgColor;
    nav.style.display = (nav.style.display === "none" || nav.style.display === "") ? "block" : "none";
}

// Add event listeners if elements exist
var navLinks = document.querySelectorAll("nav a");
if (navLinks.length) {
    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", handleInternalLinkClick);
    });
}

var menuToggle = document.querySelector(".menu-toggle");
if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
}
