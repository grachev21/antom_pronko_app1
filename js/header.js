export function headers() {
    console.log("x")
    document.querySelector("body").onmouseover = function (event) {
        let target = event.target
        show(target.className)
    }

    function show(el) {
        if (el == "link_home activ_hover_after") {
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
