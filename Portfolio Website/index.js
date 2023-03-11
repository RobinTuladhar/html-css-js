/*************************************** Menu **********************************************/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/********** Show Menu ********/
if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add('show-menu')
    })
}
/********** Hide Menu ********/
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove('show-menu')
    })
}
/************************* Hide Menu ***********************/
/*** Hide the menu after clink on any items within it ***/
const navLink = document.querySelectorAll(".nav__link")

const linkAction = () =>{
    const linkMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))