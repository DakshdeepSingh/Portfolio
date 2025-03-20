var prevScrollpos = window.scrollY;
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navigationBar").style.top = "0";
    } else {
        document.getElementById("navigationBar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
// When the user scrolls down 20px from the top of the document, show the button
    scrollFunction();
}

// Get the scroll-to-top button
let mybutton = document.getElementById("myBtn");

function scrollFunction() {
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
        mybutton.style.display = "block";
        document.getElementById("navigationBar").style.backgroundColor = "#002583";
        document.getElementById("navigationBar").style.borderBottom = "1px solid white";
    } else {
        mybutton.style.display = "none";
        document.getElementById("navigationBar").style.backgroundColor = "initial";
        document.getElementById("navigationBar").style.borderBottom = "none";
    }
}

// Smooth scroll to top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}