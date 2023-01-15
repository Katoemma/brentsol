var navLinks = document.getElementById("navLinks");
var menuIcon = document.getElementsById("menuIcon");
function openNav(){
    navLinks.style.display = "flex";
    menuIcon.style.visibilty = "hidden";

}
function closeNav(){
    navLinks.style.display ="none";
    menuIcon.style.visibilty = "visible";
}