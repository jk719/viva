
document.querySelector(".menu-toggle").addEventListener("click", function() {
var nav = document.querySelector("nav");
if (nav.style.display === "none") {
    nav.style.display = "block";
} else {
    nav.style.display = "none";
}
});


document.querySelectorAll("nav a").forEach(function(navLink) {
    navLink.addEventListener("click", function() {
        document.querySelector("nav").style.display = "none";
    });
});


