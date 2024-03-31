window.onload = function main() {

    // Check window ***************************
    if (window.innerWidth < 1200) {
        mobile(true)
        shwo_block(false)
    } else {
        mobile(false)
        shwo_block(true)
    }

    window.addEventListener('resize', function () {
        let width = document.body.clientWidth;
        if (width < 1200) {
            mobile(true)
            shwo_block(false)
        } else {
            mobile(false)
            shwo_block(true)
        }
    });


    // Show block *****************************
    function shwo_block(flag) {
        document.querySelector("body").onmouseover = function (event) {
            let target = event.target
            show(target.className)
        }

        let left = document.getElementById("link_home").clientLeft
        console.log(left)
        document.querySelector(".show_home_block").setAttribute("style", "left: 20%;")
        let link_home = document.getElementById("link_home")
        function show(el) {

            if (el == link_home.className && flag) {
                document.querySelector('.show_home_block').classList.remove("block_deactivate");
                document.querySelector('.show_home_block').classList.add("block_activate");
            }
            let list_class = ["show_home_block", "block_img", "img"]
            if (el == "background" || el == "block_content" || el == "info_text" || el == "block-content") {
                document.querySelector('.show_home_block').classList.remove("block_activate");
                document.querySelector('.show_home_block').classList.add("block_deactivate");
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
                console.log(target.className)
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