document.addEventListener("DOMContentLoaded", function () {
    const STORE = document.querySelector(".store");
    const STORE_NAV = document.querySelector(".store-nav");

    const MAC = document.querySelector(".mac");
    const MAC_NAV = document.querySelector(".mac-nav");

    const IPAD = document.querySelector(".ipad");
    const IPAD_NAV = document.querySelector(".ipad-nav");

    const IPHONE = document.querySelector(".iphone");
    const IPHONE_NAV = document.querySelector(".iphone-nav");

    const WATCH = document.querySelector(".watch");
    const WATCH_NAV = document.querySelector(".watch-nav");

    const VISION = document.querySelector(".vision");
    const VISION_NAV = document.querySelector(".vision-nav");

    const AIRPOD = document.querySelector(".airpod");
    const AIRPOD_NAV = document.querySelector(".airpod-nav");

    const TV = document.querySelector(".tv");
    const TV_NAV = document.querySelector(".tv-nav");

    const ENTER = document.querySelector(".entertanment");
    const ENTER_NAV = document.querySelector(".entertainment-nav");

    const ACCESSORY = document.querySelector(".accessory");
    const ACCESSOTY_NAV = document.querySelector(".accessories-nav");

    const SUPPORT = document.querySelector(".support");
    const SUPPORT_NAV = document.querySelector(".support-nav");

    const SEARCH = document.querySelector(".search-icon");
    const SEARCH_NAV = document.querySelector(".search-nav");

    const SHOP = document.querySelector(".bag-icon");
    const SHOP_NAV = document.querySelector(".shop-nav");

    
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");   
    document.body.appendChild(overlay);

    STORE.addEventListener("mouseenter", () => {
        STORE_NAV.classList.add("show");
        MAC_NAV.classList.remove("show"); 
        IPAD_NAV.classList.remove("show");
        IPHONE_NAV.classList.remove("show");
        WATCH_NAV.classList.remove("show");
        VISION_NAV.classList.remove("show");
        AIRPOD_NAV.classList.remove("show");
        TV_NAV.classList.remove("show");
        ENTER_NAV.classList.remove("show");
        ACCESSOTY_NAV.classList.remove("show");
        SUPPORT_NAV.classList.remove("show");
        SEARCH_NAV.classList.remove("show");
        SHOP_NAV.classList.remove("show");
        overlay.classList.add("active");
    });

    STORE_NAV.addEventListener("mouseleave", () => {
        STORE_NAV.classList.remove("show");
        overlay.classList.remove("active");
    });

    MAC.addEventListener("mouseenter", () => {
        MAC_NAV.classList.add("show");
        STORE_NAV.classList.remove("show");
        IPAD_NAV.classList.remove("show");
        IPHONE_NAV.classList.remove("show");
        WATCH_NAV.classList.remove("show");
        VISION_NAV.classList.remove("show");
        AIRPOD_NAV.classList.remove("show");
        TV_NAV.classList.remove("show");
        ENTER_NAV.classList.remove("show");
        ACCESSOTY_NAV.classList.remove("show");
        SUPPORT_NAV.classList.remove("show");
        SEARCH_NAV.classList.remove("show");
        SHOP_NAV.classList.remove("show");
        overlay.classList.add("active");
    });

    MAC_NAV.addEventListener("mouseleave", () => {
        MAC_NAV.classList.remove("show");
        overlay.classList.remove("active");
    });

    IPAD.addEventListener("mouseenter", () => {
        MAC_NAV.classList.remove("show");
        STORE_NAV.classList.remove("show");
        IPAD_NAV.classList.add("show");
        IPHONE_NAV.classList.remove("show");
        WATCH_NAV.classList.remove("show");
        VISION_NAV.classList.remove("show");
        AIRPOD_NAV.classList.remove("show");
        TV_NAV.classList.remove("show");
        ENTER_NAV.classList.remove("show");
        ACCESSOTY_NAV.classList.remove("show");
        SUPPORT_NAV.classList.remove("show");
        SEARCH_NAV.classList.remove("show");
        SHOP_NAV.classList.remove("show");
        overlay.classList.add("active");
    });

    IPAD_NAV.addEventListener("mouseleave", () => {
        IPAD_NAV.classList.remove("show");
        overlay.classList.remove("active");
    });

    IPHONE.addEventListener("mouseenter", () => {
        MAC_NAV.classList.remove("show");
        STORE_NAV.classList.remove("show");
        IPAD_NAV.classList.remove("show");
        IPHONE_NAV.classList.add("show");
        WATCH_NAV.classList.remove("show");
        VISION_NAV.classList.remove("show");
        AIRPOD_NAV.classList.remove("show");
        TV_NAV.classList.remove("show");
        ENTER_NAV.classList.remove("show");
        ACCESSOTY_NAV.classList.remove("show");
        SUPPORT_NAV.classList.remove("show");
        SEARCH_NAV.classList.remove("show");
        SHOP_NAV.classList.remove("show");
        overlay.classList.add("active");
    });

    IPHONE_NAV.addEventListener("mouseleave", () => {
        IPHONE_NAV.classList.remove("show");
        overlay.classList.remove("active");
    });

    WATCH.addEventListener("mouseenter", () => {
        MAC_NAV.classList.remove("show");
        STORE_NAV.classList.remove("show");
        IPAD_NAV.classList.remove("show");
        IPHONE_NAV.classList.remove("show");
        WATCH_NAV.classList.add("show");
        VISION_NAV.classList.remove("show");
        AIRPOD_NAV.classList.remove("show");
        TV_NAV.classList.remove("show");
        ENTER_NAV.classList.remove("show");
        ACCESSOTY_NAV.classList.remove("show");
        SUPPORT_NAV.classList.remove("show");
        SEARCH_NAV.classList.remove("show");
        SHOP_NAV.classList.remove("show");
        overlay.classList.add("active");
    });

    WATCH_NAV.addEventListener("mouseleave", () => {
        WATCH_NAV.classList.remove("show");
        overlay.classList.remove("active");
    });

    VISION.addEventListener("mouseenter", () => {
        MAC_NAV.classList.remove("show");
        STORE_NAV.classList.remove("show");
        IPAD_NAV.classList.remove("show");
        IPHONE_NAV.classList.remove("show");
        WATCH_NAV.classList.remove("show");
        VISION_NAV.classList.add("show");
        AIRPOD_NAV.classList.remove("show");
        TV_NAV.classList.remove("show");
        ENTER_NAV.classList.remove("show");
        ACCESSOTY_NAV.classList.remove("show");
        SUPPORT_NAV.classList.remove("show");
        SEARCH_NAV.classList.remove("show");
        SHOP_NAV.classList.remove("show");
        overlay.classList.add("active");
    });

    VISION_NAV.addEventListener("mouseleave", () => {
        VISION_NAV.classList.remove("show");
        overlay.classList.remove("active");
    });

    AIRPOD.addEventListener("mouseenter", () => {
        MAC_NAV.classList.remove("show");
        STORE_NAV.classList.remove("show");
        IPAD_NAV.classList.remove("show");
        IPHONE_NAV.classList.remove("show");
        WATCH_NAV.classList.remove("show");
        VISION_NAV.classList.remove("show");
        AIRPOD_NAV.classList.add("show");
        TV_NAV.classList.remove("show");
        ENTER_NAV.classList.remove("show");
        ACCESSOTY_NAV.classList.remove("show");
        SUPPORT_NAV.classList.remove("show");
        SEARCH_NAV.classList.remove("show");
        SHOP_NAV.classList.remove("show");
        overlay.classList.add("active");
    });

    AIRPOD_NAV.addEventListener("mouseleave", () => {
        AIRPOD_NAV.classList.remove("show");
        overlay.classList.remove("active");
    });

    TV.addEventListener("mouseenter", () => {
        MAC_NAV.classList.remove("show");
        STORE_NAV.classList.remove("show");
        IPAD_NAV.classList.remove("show");
        IPHONE_NAV.classList.remove("show");
        WATCH_NAV.classList.remove("show");
        VISION_NAV.classList.remove("show");
        AIRPOD_NAV.classList.remove("show");
        TV_NAV.classList.add("show");
        ENTER_NAV.classList.remove("show");
        ACCESSOTY_NAV.classList.remove("show");
        SUPPORT_NAV.classList.remove("show");
        SEARCH_NAV.classList.remove("show");
        SHOP_NAV.classList.remove("show");
        overlay.classList.add("active");
    });

    TV_NAV.addEventListener("mouseleave", () => {
        TV_NAV.classList.remove("show");
        overlay.classList.remove("active");
    });

    ENTER.addEventListener("mouseenter", () => {
        MAC_NAV.classList.remove("show");
        STORE_NAV.classList.remove("show");
        IPAD_NAV.classList.remove("show");
        IPHONE_NAV.classList.remove("show");
        WATCH_NAV.classList.remove("show");
        VISION_NAV.classList.remove("show");
        AIRPOD_NAV.classList.remove("show");
        TV_NAV.classList.remove("show");
        ENTER_NAV.classList.add("show");
        ACCESSOTY_NAV.classList.remove("show");
        SUPPORT_NAV.classList.remove("show");
        SEARCH_NAV.classList.remove("show");
        SHOP_NAV.classList.remove("show");
        overlay.classList.add("active");
    });

    ENTER_NAV.addEventListener("mouseleave", () => {
        ENTER_NAV.classList.remove("show");
        overlay.classList.remove("active");
    });

    ACCESSORY.addEventListener("mouseenter", () => {
        MAC_NAV.classList.remove("show");
        STORE_NAV.classList.remove("show");
        IPAD_NAV.classList.remove("show");
        IPHONE_NAV.classList.remove("show");
        WATCH_NAV.classList.remove("show");
        VISION_NAV.classList.remove("show");
        AIRPOD_NAV.classList.remove("show");
        TV_NAV.classList.remove("show");
        ENTER_NAV.classList.remove("show");
        ACCESSOTY_NAV.classList.add("show");
        SUPPORT_NAV.classList.remove("show");
        SEARCH_NAV.classList.remove("show");
        SHOP_NAV.classList.remove("show");
        overlay.classList.add("active");
    });

    ACCESSOTY_NAV.addEventListener("mouseleave", () => {
        ACCESSOTY_NAV.classList.remove("show");
        overlay.classList.remove("active");
    });

    SUPPORT.addEventListener("mouseenter", () => {
        MAC_NAV.classList.remove("show");
        STORE_NAV.classList.remove("show");
        IPAD_NAV.classList.remove("show");
        IPHONE_NAV.classList.remove("show");
        WATCH_NAV.classList.remove("show");
        VISION_NAV.classList.remove("show");
        AIRPOD_NAV.classList.remove("show");
        TV_NAV.classList.remove("show");
        ENTER_NAV.classList.remove("show");
        ACCESSOTY_NAV.classList.remove("show");
        SUPPORT_NAV.classList.add("show");
        SEARCH_NAV.classList.remove("show");
        SHOP_NAV.classList.remove("show");
        overlay.classList.add("active");
    });

    SUPPORT_NAV.addEventListener("mouseleave", () => {
        SUPPORT_NAV.classList.remove("show");
        overlay.classList.remove("active");
    });

    SEARCH.addEventListener("click", () => {
        MAC_NAV.classList.remove("show");
        STORE_NAV.classList.remove("show");
        IPAD_NAV.classList.remove("show");
        IPHONE_NAV.classList.remove("show");
        WATCH_NAV.classList.remove("show");
        VISION_NAV.classList.remove("show");
        AIRPOD_NAV.classList.remove("show");
        TV_NAV.classList.remove("show");
        ENTER_NAV.classList.remove("show");
        ACCESSOTY_NAV.classList.remove("show");
        SUPPORT_NAV.classList.remove("show");
        SEARCH_NAV.classList.add("show");
        SHOP_NAV.classList.remove("show");
        overlay.classList.add("active");
    });

    SEARCH_NAV.addEventListener("mouseout", () => {
        SEARCH_NAV.classList.remove("show");
        overlay.classList.remove("active");
    });

    SHOP.addEventListener("click", () => {
        MAC_NAV.classList.remove("show");
        STORE_NAV.classList.remove("show");
        IPAD_NAV.classList.remove("show");
        IPHONE_NAV.classList.remove("show");
        WATCH_NAV.classList.remove("show");
        VISION_NAV.classList.remove("show");
        AIRPOD_NAV.classList.remove("show");
        TV_NAV.classList.remove("show");
        ENTER_NAV.classList.remove("show");
        ACCESSOTY_NAV.classList.remove("show");
        SUPPORT_NAV.classList.remove("show");
        SEARCH_NAV.classList.remove("show");
        SHOP_NAV.classList.add("show");
        overlay.classList.add("active");
    });

    SHOP_NAV.addEventListener("mouseleave", () => {
        SHOP_NAV.classList.remove("show");
        overlay.classList.remove("active");
    });


    
    overlay.addEventListener("click", () => {
        STORE_NAV.classList.remove("show");
        MAC_NAV.classList.remove("show");
        IPAD_NAV.classList.remove("show");
        IPHONE_NAV.classList.remove("show");
        WATCH_NAV.classList.remove("show");
        VISION_NAV.classList.remove("show");
        AIRPOD_NAV.classList.remove("show");
        TV_NAV.classList.remove("show");
        ENTER_NAV.classList.remove("show");
        ACCESSOTY_NAV.classList.remove("show");
        SUPPORT_NAV.classList.remove("show");
        SEARCH_NAV.classList.remove("show");
        SHOP_NAV.classList.remove("show");
        overlay.classList.remove("active");
    });
});
