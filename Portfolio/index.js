var prevScrollpos = window.scrollY;
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos)
    {
        document.getElementById("navigationBar").style.top = "0";
    }
    else
    {
        document.getElementById("navigationBar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
// When the user scrolls down 20px from the top of the document, show the button
    scrollFunction()
}

// Get the button
let mybutton = document.getElementById("myBtn");
// let pageScroll = document.getElementById("scrollPage");

function scrollFunction()
{
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650)
    {
        mybutton.style.display = "block";
        // pageScroll.style.display = "block";
        document.getElementById("navigationBar").style.backgroundColor = "#002583";
        document.getElementById("navigationBar").style.borderBottom = "1px solid white";
        // document.getElementById("navigationBar").style.mixBlendMode = "normal";
    }
    else
    {
        mybutton.style.display = "none";
        // pageScroll.style.display = "none";
        document.getElementById("navigationBar").style.backgroundColor = "initial";
        document.getElementById("navigationBar").style.borderBottom = "none";
        // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        // {
            // document.getElementById("navigationBar").style.mixBlendMode = "exclusion";
        // }
        // else
        // {
        //     document.getElementById("navigationBar").style.mixBlendMode = "normal";
        // }
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// ScrollReveal().reveal('.main', {delay: 150, easing: 'cubic-bezier(0.5, 0, 0, 1'});
// ScrollReveal().reveal('.about', {delay: 150, easing: 'cubic-bezier(0.5, 0, 0, 1'});
// ScrollReveal().reveal('.experience', {delay: 150, easing: 'cubic-bezier(0.5, 0, 0, 1'});
// ScrollReveal().reveal('.work', {delay: 150, easing: 'cubic-bezier(0.5, 0, 0, 1'});
// ScrollReveal().reveal('.contact-me', {delay: 150, easing: 'cubic-bezier(0.5, 0, 0, 1'});