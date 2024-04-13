const MENU_OPEN = document.querySelector(".menu_open");
const SLOGAN_TITLE = document.querySelector("h1.title");
const INFO_TEXT = document.querySelector(".info_text");
const ITEM_IMAGES_LIST = document.querySelectorAll("a.item_images");
const LEFT_BLOG_IMG = document.querySelector(".left_blog_img > a > img");
const TOP_BLOG_IMG = document.querySelector(".top_blog_img > a > img");
const LEFT_IMG = document.querySelector(".left_img > a > img");
const RIGHT_IMG = document.querySelector(".right_img > a > img");
const PHOTO_BLOG_H1_LIST = document.querySelectorAll(".photo_blog div h1");
const INSTAGRAM_CONTENT_IMG_LIST = document.querySelectorAll("div.instagram_content a img");

export function on() {
    MENU_OPEN.setAttribute("style", "display: block;");
    SLOGAN_TITLE.setAttribute("style", "font-size: 2.1em;");
    INFO_TEXT.setAttribute("style", "display: none;");
    cycle(ITEM_IMAGES_LIST, "width: 134px; height: 202px");
    LEFT_BLOG_IMG.setAttribute("style", "width: 350px; height: 350px;");
    TOP_BLOG_IMG.setAttribute("style", "width: 350px; height: 167px;");
    LEFT_IMG.setAttribute("style", "width: 160px; height: 160px;");
    RIGHT_IMG.setAttribute("style", "width: 160px; height: 160px;");
    cycle(PHOTO_BLOG_H1_LIST, "font-size: 1.6em;", "on");
    cycle(INSTAGRAM_CONTENT_IMG_LIST, "width: 170px; height: 170px;", "on");
}

export function off() {
    MENU_OPEN.removeAttribute("style");
    SLOGAN_TITLE.removeAttribute("style");
    INFO_TEXT.removeAttribute("style");
    cycle(ITEM_IMAGES_LIST, null, "off");
    LEFT_BLOG_IMG.removeAttribute("style");
    TOP_BLOG_IMG.removeAttribute("style");
    LEFT_IMG.removeAttribute("style");
    RIGHT_IMG.removeAttribute("style");
    cycle(PHOTO_BLOG_H1_LIST, null, "off");
    cycle(INSTAGRAM_CONTENT_IMG_LIST, null, "off");
}


function cycle(params, style, flag) {
    for (let index = 0; index < params.length; index++) {
        if (flag == "on") {
            params[index].setAttribute("style", style)
        }
        if (flag == "off") {
            params[index].removeAttribute("style")
        }
    }
}