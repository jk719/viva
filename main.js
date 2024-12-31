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

// Function to show the Oreyo chatbot popup
function showOreyoPopup() {
    var popup = document.getElementById("oreyo-popup");
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.display = "none";
    }, 5000); // Popup disappears after 5 seconds
}

// Function to close the Oreyo chatbot popup
function closeOreyoPopup() {
    var popup = document.getElementById("oreyo-popup");
    popup.style.display = "none";
}

// Function to handle Calendly dropdown toggle and button text change
function toggleCalendly(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const button = event.currentTarget;
    const targetId = button.getAttribute('data-calendly');
    const targetElement = document.getElementById(`calendly-${targetId}`);

    // Hide any other active Calendly containers and reset buttons
    document.querySelectorAll('.calendly-container').forEach(container => {
        if (container !== targetElement) {
            container.classList.remove('active');
        }
    });
    document.querySelectorAll('.btn-vaccine').forEach(btn => {
        if (btn !== button) {
            if (btn.getAttribute('data-calendly') === 'spikevax') {
                btn.textContent = 'Pediatric SPIKEVAX Vaccine';
            } else if (btn.getAttribute('data-calendly') === 'other-vaccines') {
                btn.textContent = 'Adult Covid-19, Flu, Hepatitis B, MMR, & Other Vaccines';
            }
        }
    });

    // Toggle the visibility of the selected Calendly container
    targetElement.classList.toggle('active');

    // Change button text to "Done" when widget is visible, revert to original when hidden
    if (targetElement.classList.contains('active')) {
        button.textContent = 'Done';
    } else {
        // Revert the text based on the data-calendly attribute
        if (targetId === 'spikevax') {
            button.textContent = 'Pediatric SPIKEVAX Vaccine';
        } else if (targetId === 'other-vaccines') {
            button.textContent = 'Adult Covid-19, Flu, Hepatitis B, MMR, & Other Vaccines';
        }
    }
}

// Add event listeners to the alert banner buttons
document.querySelectorAll('.btn-vaccine').forEach(button => {
    button.addEventListener('click', toggleCalendly);
});


// Add event listeners to the alert banner buttons
document.querySelectorAll('.btn-vaccine').forEach(button => {
    button.addEventListener('click', toggleCalendly);
});


// Add event listeners to the alert banner buttons
document.querySelectorAll('.btn-vaccine').forEach(button => {
    button.addEventListener('click', toggleCalendly);
});


// Show the alert banner with a sliding effect
function showAlertBanner() {
    const alertBanner = document.querySelector('.alert-banner');
    setTimeout(() => {
        alertBanner.classList.add('show');
    }, 500); // Delay to allow the navbar to load first
}

// Add event listeners for internal link clicks
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

// Add event listeners to the alert banner buttons
document.querySelectorAll('.btn-vaccine').forEach(button => {
    button.addEventListener('click', toggleCalendly);
});





// Show the popup when the page loads
window.onload = function() {
    // Show holiday popup every time
    setTimeout(() => {
        showHolidayPopup();
    }, 1000);

    // Your existing onload functions
    setTimeout(() => {
        showOreyoPopup();
    }, 1000);

    setTimeout(() => {
        showPopup();
    }, 1000);

    showAlertBanner();
};


// Function to show the alert popup
function showPopup() {
    const popup = document.getElementById('alertPopup');
    popup.classList.add('active');
}

// Function to close the alert popup
function closePopup() {
    const popup = document.getElementById('alertPopup');
    popup.classList.remove('active');
}

// Function to show holiday popup
function showHolidayPopup() {
    const popup = document.getElementById('holidayPopup');
    popup.classList.add('active');
}

// Function to close holiday popup
function closeHolidayPopup() {
    const popup = document.getElementById('holidayPopup');
    popup.classList.remove('active');
}
