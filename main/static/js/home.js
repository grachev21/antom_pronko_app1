import { mobile_menu } from './mobile_menu.js';

window.onload = function main() {

    show_block()

    // Show block *****************************
    function show_block(flag) {
        if (flag) {
            document.querySelector("body").onmouseover = function (event) {
                let target = event.target
                let class_name = target.className.split(" ")[0]

                if (class_name == "link_home") { show(class_name, "link_home", ".block_img") }
                if (class_name == "catalog") { show(class_name, "catalog", ".block_catalog") }
                if (class_name == "information") { show(class_name, "information") }
                if (class_name == "help") { show(class_name, "help") }
                if (class_name == "background" || class_name == "block_content" || class_name == "info_text" || class_name == "block-content") {
                    hide()
                }
            }
        }
        function show(name, block) {
            let left = document.getElementById(name).offsetLeft
            let on = `z-index: 50; top: 40px; opacity: 100%; transition: opacity 1s, top .3s; left: ${left - 20}px;`
            document.querySelector(".show_home_block").setAttribute("style", on);
            document.querySelector(block).setAttribute("style", "visibility: inherit;")
        }

        function hide() {
            let left = document.getElementById("show_home_block").offsetLeft
            let off = `visibility: hidden; top: 83px; left: ${left}px; opacity: 0%; transition: .1s;`
            document.querySelector(".show_home_block").setAttribute("style", off);

            let all_blocks = document.getElementById("show_home_block").children
            for (let index = 0; index < all_blocks.length; index++) {
                all_blocks[index].setAttribute("style", "visibility: hidden; transition: .1s;");
            }
        }
    }

    mobile_menu()

    // Images line ****************************************
    const links = document.querySelectorAll(".links_shop>.links");
    const img = document.querySelectorAll(".img_block img");

    for (let index = 0; index < links.length; index++) {

        links[index].addEventListener("mouseover",
            function () { this.classList.add("links_activate"); });

        img[index].addEventListener("mouseenter",
            function () { this.classList.add("zoom"); });
        img[index].addEventListener("mouseleave",
            function () { this.classList.remove("zoom"); });
    }


    const images_hot_deal = document.querySelectorAll(".item_images");
    const panel_links = document.querySelectorAll(".panel_links")
    const icons = document.querySelectorAll("div.block_panel_links")

    for (let index = 0; index < images_hot_deal.length; index++) {
        images_hot_deal[index].addEventListener("mouseover",
            function () { panel_links[index].setAttribute("style", "opacity: 70%; bottom: 120px; transition: .9s;") }
        )
        images_hot_deal[index].addEventListener("mouseleave",
            function () { panel_links[index].setAttribute("style", "opacity: 0%; bottom: 50px; transition: .9s;") }
        )
    }

    for (let index = 0; index < icons.length; index++) {
        icons[index].addEventListener("mouseover",
            function () { icons[index].classList.add("invert_icons") }
        )
        icons[index].addEventListener("mouseleave",
            function () { icons[index].classList.remove("invert_icons") }
        )
    }


    const photo_blog = document.querySelectorAll(".photo_blog img");
    for (let index = 0; index < photo_blog.length; index++) {
        photo_blog[index].addEventListener("mouseover",
            function () { this.classList.add("zoom") }
        )
        photo_blog[index].addEventListener("mouseleave",
            function () { this.classList.remove("zoom") }
        )
    }

    const instagram = document.querySelectorAll(".instagram_photo");
    const instagram_icon = document.querySelectorAll(".instagram_icon");
    for (let index = 0; index < instagram.length; index++) {
        instagram[index].addEventListener("mouseover",
            function () {
                this.classList.add("zoom", "blackout");
                instagram_icon[index].setAttribute("style", "opacity: 100%; transition: .9s;");
            }
        )
        instagram[index].addEventListener("mouseleave",
            function () {
                this.classList.remove("zoom", "blackout")
                instagram_icon[index].setAttribute("style", "opacity: 0%; transition: .9s;");
            }
        )
    }



}


