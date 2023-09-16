document.querySelectorAll("nav a").forEach(function(navLink) {
    navLink.addEventListener("click", function(event) {
        var target = this.getAttribute('href');

        // check if link is internal (starts with '#')
        if (target.startsWith("#")) {
            event.preventDefault(); // prevent the default action

            target = document.querySelector(target); // get the target element

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
        } 
        // check if link is external (starts with 'http')
        else if (target.startsWith("http")) {
            // The default behavior (navigating to the external link) is desired in this case, so we don't need to prevent it or do anything else
        }
        // The link is assumed to be a relative link if it's not an internal or external link
        else {
            // The default behavior (navigating to the relative link) is desired in this case, so we don't need to prevent it or do anything else
        }
    });
});






document.querySelector(".menu-toggle").addEventListener("click", function() {
    var nav = document.querySelector("nav");
    var header = document.querySelector("header");

    // Get the background color of the header
    var headerBgColor = window.getComputedStyle(header).getPropertyValue('background-color');

    // Apply the header's background color to the nav
    nav.style.backgroundColor = headerBgColor;
    
    // Toggle the display of the nav
    nav.style.display = (nav.style.display === "none" || nav.style.display === "") ? "block" : "none";
});
