// Function to handle internal link navigation with smooth scrolling
function handleInternalLinkClick(event) {
    var target = this.getAttribute('href');

    if (target.startsWith("#")) {
        event.preventDefault();

        target = document.querySelector(target);
        if (!target) return; // Exit if target doesn't exist

        var headerHeight = document.querySelector('header').offsetHeight;
        var positionToScrollTo = target.offsetTop - headerHeight;

        // Smoothly scroll to the target
        window.scrollTo({ top: positionToScrollTo, behavior: 'smooth' });

        // Hide the mobile menu and overlay after a link is clicked
        hideMobileMenuOverlay();
    }
}

// Function to hide mobile menu and overlay
function hideMobileMenuOverlay() {
    var nav = document.querySelector("nav.navbar");
    var moreDropdown = document.querySelector(".dropdown-menu");
    var mobileMenuOverlay = document.getElementById("mobile-menu-overlay");

    if (!nav) return; // Exit if nav doesn't exist

    nav.style.display = "none";
    moreDropdown.style.display = "none"; // Hide the More dropdown menu
    mobileMenuOverlay.style.display = "none"; // Hide the overlay
}

// Add event listeners if elements exist
var navLinks = document.querySelectorAll("nav a");
if (navLinks.length) {
    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            if (window.innerWidth <= 600) {
                toggleMenu(); // Close the menu on mobile devices
            }
        });
    });
}
var menuToggle = document.querySelector(".menu-toggle");
if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
}
// Function to handle menu toggle on mobile devices
function toggleMenu() {
    var nav = document.querySelector("nav.navbar");
    var header = document.querySelector("header");
    var moreDropdown = document.querySelector(".dropdown-menu");
    var mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
    var screenWidth = window.innerWidth || document.documentElement.clientWidth;

    if (!nav || !header) return; // Exit if nav or header doesn't exist

    if (screenWidth <= 600) {
        if (nav.style.display === "none" || nav.style.display === "") {
            nav.style.display = "block";
            moreDropdown.style.display = "block"; // Show the More dropdown menu
            mobileMenuOverlay.style.display = "block"; // Show the overlay
        } else {
            nav.style.display = "none";
            moreDropdown.style.display = "none"; // Hide the More dropdown menu
            mobileMenuOverlay.style.display = "none"; // Hide the overlay
        }
    }
}