window.onload = function enter() {


    document.querySelector(".enter").addEventListener("click",
        function () { changeColor(this, "green"); });
}

function changeColor(el, color) {
    let wrapper_slider = document.querySelector(".wrapper_slider")

    if (wrapper_slider.style.display == "block") {
        wrapper_slider.style.display = "none"
        el.style.transform = "rotate(90deg)"
    } else {
        wrapper_slider.style.display = "block"
        el.style.transform = "rotate(0deg)"

    }
}    



window.onload = function price() {
    let min = document.querySelector("")

}