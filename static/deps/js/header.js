window.onload = function donenow() {

    // document.querySelector("body").onmouseover = function (event) {
    //     let target = event.target
    //     show(target.className)
    // }

    // function show(el) {
    //     // let check = document.querySelector(".show_home_block").style.top
    //     if (el == "link_home") {
    //         // console.log(check)
    //         show_block()
    //     }

    //     // if (el != "link_home" && el != "home" && el != "show_home_block" && el != "show_content") {
    //     //     hide_block()
    //     // }
    // }

    document.querySelector(".home").addEventListener("mouseenter",
        function () { show_block(this); });

    function show_block(el) {

        let start = 330;
        console.log("xxxxxxx")


        let block = document.querySelector('.show_home_block');
        block.classList.add("finish_home_block")


        // setInterval(function () {
        //     if (start === 280) {
        //         clearInterval();
        //     } else {
        //         start--;
        //         document.querySelector(".show_home_block").style.top = `${start}px`;
        //     }
        // }, 2);
    }

}

function hide_block() {
    console.log("no")
    document.querySelector('.show_content').style.opacity = "0%";

    let block = document.querySelector('.show_home_block');
    let start = 290;
    document.querySelector('.show_content').style.opacity = "0%";
    document.querySelector('.show_content').style.transition = "1s";
    setInterval(function () {
        if (start === 330) {
            clearInterval();
        } else {
            start++;
            block.style.top = `${start}px`;
        }
    }, 18);
}

