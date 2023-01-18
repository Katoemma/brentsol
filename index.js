var navLinks = document.getElementById("navLinks");
var menuIcon = document.getElementsById("menuIcon");
function openNav(){
    navLinks.style.height = "100%";
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
//animating the welcome text
window.onload = function(){
    var textAnimation = document.getElementById("animText");
    textAnimation.innerHTML = "lets size your Solar";
};