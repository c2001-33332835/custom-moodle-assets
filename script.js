console.log("[FrMoodleTheme] Frankium's Monash Moodle Theme loaded.");

// remove bg-white from navbar
var navbar = document.getElementsByClassName("navbar")[0];
navbar.classList.remove("bg-white");

// remove text-light from footer
var footer = document.getElementById("page-footer");
footer.classList.remove("text-light");
