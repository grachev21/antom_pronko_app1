window.onload = function donenow() {

    document.querySelector("body").onmouseover = function (event) {
        let target = event.target
        show(target.className)
    }

    function show(el) {
        console.log(el)
        if (el == "link_home") {
            document.querySelector('.show_home_block').classList.remove("block_deactivate");
            document.querySelector('.show_home_block').classList.add("block_activate");
        }


        let list_class = ["show_home_block", "block_img", "img"]
        if (el == "background" || el == "block_content" || el == "info_text" || el == "block-content") {
            console.log("deactive");
            document.querySelector('.show_home_block').classList.remove("block_activate");
            document.querySelector('.show_home_block').classList.add("block_deactivate");
        }
        // console.log(document.querySelector(".show_home_block").className)
    }



}
