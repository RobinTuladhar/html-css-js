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

/************************* Swipper js(Projects) ***********************/
let swiperProjects = new Swiper(".projects__container", {
    grabCursor: true,
    loop: true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});
/************************* Swipper js(Testimonial) ***********************/
let swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
/************************* Email JS ***********************/
const contactForm = document.getElementById("contact-form"),
      contactName = document.getElementById("contact-name"),
      contactEmail = document.getElementById("contact-email"),
      contactProject = document.getElementById("contact-project"),
      contactMessage = document.getElementById("contact-message")

// const sendEmail = (e) =>{
//     e.preventDefault()

//     // Check if the field has a value or not
//     if(contactName.value === "" || contactEmail.value === "" || contactProject.value === "" ){
//         // Add and romove color
//         contactMessage.classList.remove("color-blue")
//         contactMessage.classList.add("color-red")

//         //Show message
//         contactMessage.textContent = "Write all the input fields!!!"
//     } else{
//         // serviceID - templateID - #form - publicKey
//         emailjs.sendForm("service_qxce3gc","template_bh4415t","#contact-form", "wn6rodfObACF6FpoL")
//             .then(() =>{
//                 // Show message and add color
//                 contactMessage.classList.add("color-blue")
//                 contactMessage.textContent = "Message sent"
                
//                 //Remove message after five seconds
//                 setTimeout(() =>{
//                     contactMessage.textContent = ""
//                 }, 5000)
//             }, (error) =>{
//                  alert("OOPS! SOMETHING HAS FAILE..", eror)
//      })
//     // to clear the input field
//     contactName.value =""
//     contactEmail.value =""
//     contactProject.value =""
//     }

// }
// contactForm.addEventListener("submit", sendEmail)

const sendEmail = (e) => {
    e.preventDefault();
  
    // Check if the fields have values or not
    if (contactName.value === "" || contactEmail.value === "" || contactProject.value === "") {
      // Add and remove classes
      contactMessage.classList.remove("color-blue");
      contactMessage.classList.add("color-red");
  
      // Show message
      contactMessage.textContent = "Write all the input fields";
    } else {
      // Add and remove classes
      contactMessage.classList.remove("color-red");
      contactMessage.classList.add("color-blue");
  
      // Show message
      contactMessage.textContent = "Your message has been sent successfully!";
    }
  };
  
  contactForm.addEventListener("submit", sendEmail);
// **************************** SCROLL SECTIONS ACTIVE LINK***********************************

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);
// **************************** show scroll up***********************************
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    // will only show when the scroll is higher than 350 viewport height
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
                        : scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// **************************** Dark theme***********************************
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// we validate if the user previously chose a topic
if (selectedTheme){
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme);
}

//Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});
// CHANGE BACKGROUND HEADER 
// const scrollHeader = () =>{
//     const header = document.getElementById("header")

//     this.scrollY >= 50 ? header.classList.add("bg-header")
//                        : header.classList.remove("bg-header")
// }
// window.addEventListener("scroll", scrollHeader)
const scrollHeader = () =>{
    const header = document.getElementById("header")

    window.scrollY >= 50 ? header.classList.add("bg-header")
                         : header.classList.remove("bg-header")
}

window.addEventListener("scroll", scrollHeader)

// SCROLL REVEAL ANIMATION