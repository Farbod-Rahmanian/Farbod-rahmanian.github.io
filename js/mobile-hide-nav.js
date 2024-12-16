const ICON_NAV = document.querySelector(".mobile-nav");
const HIDE = document.querySelector(".hide-on");
const HIDE_LOGO = document.querySelectorAll(".hidden1");
const BACK_NAV = document.querySelector(".back-nav");
const ICON = document.querySelector(".menu-icon");
const LINE1 = document.querySelector(".line-1");
const LINE2 = document.querySelector(".line-2");
const STORE = document.querySelector(".store-menu");
const STORE_NAV = document.querySelector(".store-nav");

const MAC = document.querySelector(".mac-menu");
const MAC_NAV = document.querySelector(".mac-nav");

const IPAD = document.querySelector(".ipad-menu");
const IPAD_NAV = document.querySelector(".ipad-nav");

const IPHONE = document.querySelector(".iphone-menu");
const IPHONE_NAV = document.querySelector(".iphone-nav");

const WATCH = document.querySelector(".watch-menu");
const WATCH_NAV = document.querySelector(".watch-nav");

const VISION = document.querySelector(".vision-menu");
const VISION_NAV = document.querySelector(".vision-nav");

const AIRPOD = document.querySelector(".airpod-menu");
const AIRPOD_NAV = document.querySelector(".airpod-nav");

const TV = document.querySelector(".tv-menu");
const TV_NAV = document.querySelector(".tv-nav");

const AC = document.querySelector(".ac-menu");
const AC_NAV = document.querySelector(".accessories-nav");

const SUPPORT = document.querySelector(".support-menu");
const SUPPORT_NAV = document.querySelector(".support-nav");

let clickState = 0;

function closeAllMenus() {
    ICON_NAV.classList.remove("show");
    ICON_NAV.style.display = "none";
    STORE_NAV.classList.remove("show");
    STORE_NAV.style.display = "none";
    MAC_NAV.classList.remove("show");
    MAC_NAV.style.display = "none";
    IPAD_NAV.classList.remove("show");
    IPAD_NAV.style.display = "none";
    IPHONE_NAV.classList.remove("show");
    IPHONE_NAV.style.display = "none";
    WATCH_NAV.classList.remove("show");
    WATCH_NAV.style.display = "none";
    VISION_NAV.classList.remove("show");
    VISION_NAV.style.display = "none";
    AIRPOD_NAV.classList.remove("show");
    AIRPOD_NAV.style.display = "none";
    TV_NAV.classList.remove("show");
    TV_NAV.style.display = "none";
    AC_NAV.classList.remove("show");
    AC_NAV.style.display = "none";
    SUPPORT_NAV.classList.remove("show");
    SUPPORT_NAV.style.display = "none";
    HIDE.style.display = "block";
    HIDE_LOGO.forEach(item => (item.style.display = "block"));
    BACK_NAV.style.display = "none";
}


ICON.addEventListener("click", () => {
    if (clickState === 0) {
        closeAllMenus(); 
        ICON_NAV.classList.add("show");
        ICON_NAV.style.display = "block";
        ICON.style.margin="18px"
        HIDE.style.display = "none";
        HIDE_LOGO.forEach(item => (item.style.display = "none"));
        clickState = 1; 
    } else if (clickState === 1) {
        closeAllMenus();
        clickState = 0; 
    }
});

ICON.addEventListener("click", () => {
    LINE1.classList.toggle("change-line-1");
    LINE2.classList.toggle("change-line-2");
});


STORE.addEventListener("click", () => {
    closeAllMenus(); 
    STORE_NAV.style.display = "block";
    STORE_NAV.classList.add("show");
    HIDE.style.display = "none";
    HIDE_LOGO.forEach(item => (item.style.display = "none"));
    BACK_NAV.style.display = "block";
});

MAC.addEventListener("click", () => {
    closeAllMenus(); 
    MAC_NAV.style.display = "block";
    MAC_NAV.classList.add("show");
    HIDE.style.display = "none";
    HIDE_LOGO.forEach(item => (item.style.display = "none"));
    BACK_NAV.style.display = "block";
});
IPAD.addEventListener("click", () => {
    closeAllMenus(); 
    IPAD_NAV.style.display = "block";
    IPAD_NAV.classList.add("show");
    HIDE.style.display = "none";
    HIDE_LOGO.forEach(item => (item.style.display = "none"));
    BACK_NAV.style.display = "block";
});
IPHONE.addEventListener("click", () => {
    closeAllMenus(); 
    IPHONE_NAV.style.display = "block";
    IPHONE_NAV.classList.add("show");
    HIDE.style.display = "none";
    HIDE_LOGO.forEach(item => (item.style.display = "none"));
    BACK_NAV.style.display = "block";
});
WATCH.addEventListener("click", () => {
    closeAllMenus(); 
    WATCH_NAV.style.display = "block";
    WATCH_NAV.classList.add("show");
    HIDE.style.display = "none";
    HIDE_LOGO.forEach(item => (item.style.display = "none"));
    BACK_NAV.style.display = "block";
});
VISION.addEventListener("click", () => {
    closeAllMenus(); 
    VISION_NAV.style.display = "block";
    VISION_NAV.classList.add("show");
    HIDE.style.display = "none";
    HIDE_LOGO.forEach(item => (item.style.display = "none"));
    BACK_NAV.style.display = "block";
});
AIRPOD.addEventListener("click", () => {
    closeAllMenus(); 
    AIRPOD_NAV.style.display = "block";
    AIRPOD_NAV.classList.add("show");
    HIDE.style.display = "none";
    HIDE_LOGO.forEach(item => (item.style.display = "none"));
    BACK_NAV.style.display = "block";
});
TV.addEventListener("click", () => {
    closeAllMenus(); 
    TV_NAV.style.display = "block";
    TV_NAV.classList.add("show");
    HIDE.style.display = "none";
    HIDE_LOGO.forEach(item => (item.style.display = "none"));
    BACK_NAV.style.display = "block";
});
AC.addEventListener("click", () => {
    closeAllMenus(); 
    AC_NAV.style.display = "block";
    AC_NAV.classList.add("show");
    HIDE.style.display = "none";
    HIDE_LOGO.forEach(item => (item.style.display = "none"));
    BACK_NAV.style.display = "block";
});
SUPPORT.addEventListener("click", () => {
    closeAllMenus(); 
    SUPPORT_NAV.style.display = "block";
    SUPPORT_NAV.classList.add("show");
    HIDE.style.display = "none";
    HIDE_LOGO.forEach(item => (item.style.display = "none"));
    BACK_NAV.style.display = "block";
});

BACK_NAV.addEventListener("click", () => {
    closeAllMenus();
    ICON_NAV.classList.add("show");
    ICON_NAV.style.display = "block";
    HIDE.style.display = "none";
    HIDE_LOGO.forEach(item => (item.style.display = "none"));
    clickState = 1;
});
