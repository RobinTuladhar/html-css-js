////////// sidebar start //////////

////////// Notification  //////////
const menuItems = document.querySelectorAll(".menu-item");

const changeActionItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active");
    })
}
////////// Show notification child when clicked on notifcaitons on the left + remove the icon  //////////
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeActionItem();
        item.classList.add("active");
        if(item.id != "notifications"){
            document.querySelector(".notifications-popup").
            style.display = "none"
        }else{
            document.querySelector(".notifications-popup").
            style.display = "block"
            document.querySelector("#notifications .notification-count").style.display = "none";
        }
    })
})
////////// Messages(left seciton)  //////////
const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
////// higlight messages card when messages on the left section is clicked  //////
messagesNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNotification.querySelector(".notification-count").style.display = "none";
    setTimeout(() =>{
        messages.style.boxShadow = "none";
    }, 1500);

})
////////// Messages(right seciton)  //////////
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

/////// search chats ///////
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector("h5").textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = "flex";
        } else{
            user.style.display = "none";
        }

    })

}

/////// search chat  ///////
messageSearch.addEventListener("keyup", searchMessage);

////////// sidebar end //////////

//////////////////////////////////// Theme display customization //////////////////////////////// 
const theme = document.querySelector("#theme")
const themeModel = document.querySelector(".customize-theme");

// opens the theme model
const openThemeModel = () =>{
    themeModel.style.display = "grid";
}

//close the theme model
const closeThemeModel = (e) =>{
    if(e.target.classList.contains("customize-theme")){
        themeModel.style.display = "none";
    }
}

themeModel.addEventListener("click", closeThemeModel);

theme.addEventListener("click", openThemeModel);

/////////////////// fontsize ///////////////////
const fontSizes = document.querySelectorAll(".choose-size span")
var root = document.querySelector(":root");

//remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}

fontSizes.forEach(size => { 
    size.addEventListener("click", () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle("active");

        if(size.classList.contains("font-size-1")){
            fontSize = "10px";
            root.style.setProperty("----sticky-top-left", "5.4rem")
            root.style.setProperty("----sticky-top-right", "5.4rem")
        } else if(size.classList.contains("font-size-2")){
            fontSize = "13px"
            root.style.setProperty("----sticky-top-left", "5.4rem")
            root.style.setProperty("----sticky-top-right", "-7rem")
        } else if(size.classList.contains("font-size-3")){
            fontSize = "16px"
            root.style.setProperty("----sticky-top-left", "-2rem")
            root.style.setProperty("----sticky-top-right", "-17rem")
        } else if(size.classList.contains("font-size-4")){
            fontSize = "19px"
            root.style.setProperty("----sticky-top-left", "-5rem")
            root.style.setProperty("----sticky-top-right", "-25rem")
        } else if(size.classList.contains("font-size-5")){
            fontSize = "22px"
            root.style.setProperty("----sticky-top-left", "-12rem")
            root.style.setProperty("----sticky-top-right", "-35rem")
        }
    // change font size of the root html element
    document.querySelector("html").style.fontSize = fontSize;
    })  
})
/////////////////// primary colors ///////////////////

///// remove acitve class form color /////
const changeActionColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove("active");
    })
}

const colorPalette = document.querySelectorAll(".choose-color span")

colorPalette.forEach(color => {
    color.addEventListener("click", () => {
        let primary;
        changeActionColorClass()

        if(color.classList.contains("color-1")){
            primaryHue = 252;
        } else if(color.classList.contains("color-2")){
            primaryHue = 52;
        } else if(color.classList.contains("color-3")){
            primaryHue = 352;
        } else if(color.classList.contains("color-4")){
            primaryHue = 152;
        } else if(color.classList.contains("color-5")){
            primaryHue = 202;
        }
        color.classList.add("active");

        root.style.setProperty("--primary-color-hue", primaryHue);
    })
})

//////////////////////// background colors ////////////////////////////

const Bg1 = document.querySelector(".bg-1")
const Bg2 = document.querySelector(".bg-2")
const Bg3 = document.querySelector(".bg-3")

// theme bg values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//changes bg color
const changeBG = () =>{
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
}

Bg1.addEventListener("click", () => {
    darkColorLightness = "17%"
    whiteColorLightness = "100%"
    lightColorLightness = "90%"
    // add active class
    Bg1.classList.add("active");
    // remove active class from the
    Bg2.classList.remove("active");
    Bg3.classList.remove("active");
    window.location.reload();
})

Bg2.addEventListener("click", () => {
    darkColorLightness = "95%"
    whiteColorLightness = "20%"
    lightColorLightness = "15%"

    // add active class
    Bg2.classList.add("active");
    // remove active class from the
    Bg1.classList.remove("active");
    Bg3.classList.remove("active");
    changeBG();
})

Bg3.addEventListener("click", () => {
    darkColorLightness = "95%"
    whiteColorLightness = "10%"
    lightColorLightness = "0%"

    // add active class
    Bg3.classList.add("active");
    // remove active class from the
    Bg1.classList.remove("active");
    Bg2.classList.remove("active");
    changeBG();
})


