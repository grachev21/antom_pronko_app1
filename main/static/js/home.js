window.onload = function main() {


    // Check window ***************************
    if (window.innerWidth < 1200) {
        mobile(true)
        show_block(false)
    } else {
        mobile(false)
        show_block(true)
    }

    window.addEventListener('resize', function () {
        let width = document.body.clientWidth;
        if (width < 1200) {
            mobile(true)
            show_block(false)
        } else {
            mobile(false)
            show_block(true)
        }
    });


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
        function show(class_name, name, block) {
            let left = document.getElementById(name).offsetLeft
            let on = `z-index: 50; top: 40px; opacity: 100%; transition: opacity 1s, top .5s; left: ${left - 20}px;`
            document.querySelector(".show_home_block").style.cssText = on
            document.querySelector(block).style.cssText = `visibility: inherit;`
        }

        function hide(params) {
            let left = document.getElementById("show_home_block").offsetLeft
            let off = `visibility: hidden; top: 83px; left: ${left}px; opacity: 0%; transition: .4s;`
            document.querySelector(".show_home_block").style.cssText = off

            let all_blocks = document.getElementById("show_home_block").children
            for (let index = 0; index < all_blocks.length; index++) {
                all_blocks[index].style.cssText = `visibility: hidden; transition: visibility .3s;`
            }
        }
    }

    // Adaptability ***************************
    function mobile(flag) {
        if (flag) {
            offHoverAfter()
            document.querySelector(".menu_open").setAttribute("style", "display: block;")
            document.querySelector(".info_text").classList.add("adaptability");

            document.querySelector("body").onclick = function (event) {
                let target = event.target
                // console.log(target.className)
                if (target.className == "menu_open") {
                    document.querySelector(".info_text").setAttribute("style", "left: 0px; transition: left .3s;")
                } else {
                    document.querySelector(".info_text").setAttribute("style", "left: -320px; transition: left .3s;")
                }
            }

        } else {
            document.querySelector(".menu_open").setAttribute("style", "display: none;")
            onHoverAfter()
            document.querySelector(".panel").setAttribute("style", "display: none;");
            document.querySelector(".info_text").classList.remove("adaptability");
        }
    }
    function onHoverAfter() {
        let activ_hover = document.querySelectorAll(".info_text > a")
        for (let index = 0; index < activ_hover.length; index++) {
            activ_hover[index].classList.add("activ_hover_after");
        }
    }
    function offHoverAfter() {
        let activ_hover = document.querySelectorAll(".info_text > a")
        for (let index = 0; index < activ_hover.length; index++) {
            activ_hover[index].classList.remove("activ_hover_after");
        }
    }

    function turnPanel() {

    }

}