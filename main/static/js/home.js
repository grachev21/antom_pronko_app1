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

            if (target.className.split(" ")[0] == "link_home") {
                show(target.className, "link_home", 32)
            } else { show(target.className, 32) }

            if (target.className.split(" ")[0] == "catalog") {
                show(target.className, "catalog", 36)
            } else { show(target.className, 36) }

            if (target.className.split(" ")[0] == "information") {
                show(target.className, "information", 40)
            } else { show(target.className, "information", 40) }

            if (target.className.split(" ")[0] == "help") {
                show(target.className, "help", 42)
            } else { show(target.className, 42) }
        }

        // document.querySelector(".show_home_block").setAttribute("style", "left: 20%;")
        function show(el, name, value) {
            console.log("object");

            if (el.split(" ")[0] == name && flag) {
                document.querySelector('.show_home_block').setAttribute("style", `left: ${value}%`);
                document.querySelector('.show_home_block').classList.remove("block_deactivate");
                document.querySelector('.show_home_block').classList.add("block_activate");
            }
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