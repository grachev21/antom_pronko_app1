export function show_block(flag) {
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