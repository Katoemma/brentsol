var navLinks = document.getElementById("navLinks");
var menuIcon = document.getElementsById("menuIcon");
function openNav(){
    navLinks.style.height = "100vh";
    menuIcon.style.display = "none";
    document.getElementById("animText").style.display ="none";

}
function closeNav(){
    navLinks.style.height ="0%";
    menuIcon.style.display = "block";
}
//closing the navigation bar on selection a link
function closeBar(){
    navLinks.style.height ="0";
}
//Scrool to top on clicking the back to top button
function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}
