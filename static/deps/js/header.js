var navbar = document.querySelector(".navbar-brand");
var block = document.querySelector(".show_home_block")
navbar.addEventListener("mouseenter", showHome);
navbar.addEventListener("mouseout", hideHome);
block.addEventListener("mouseenter", blockShowHome);
block.addEventListener("mouseleave", blockHideHome);

function showHome(el) {
    let block = document.querySelector('.show_home_block');
    let x = 330;


        block.style.display = "block";
        block.style.top = "330px";

        setInterval(function () {
            if (x === 260) {
                clearInterval();
            } else {
                x--;
                block.style.top = `${x}px`;
            }
        }, 2);

}

function hideHome(el) {
    document.querySelector(".show_home_block").style.display = "none"
}

function blockShowHome(el) {
    document.querySelector(".show_home_block").style.display = "block"
}

function blockHideHome(el) {
    document.querySelector(".show_home_block").style.display = "none"
}