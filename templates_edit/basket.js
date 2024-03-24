var someObject = require('./.json')



window.onload = function enter() {

    // const readFile = fs.readFileSync("carts.json", "utf8");

    // console.log(readFile);
    console.log('xxx')
    document.querySelector("div.enter").addEventListener("click",
        function () { changeColor(this); });
}

function changeColor(el) {

    let block = document.querySelector(".wrapper_slider");
    if (document.querySelector(".wrapper_slider")) {
        if (block.style.display != "none") {
            el.style.transform = "rotate(180deg)";
            block.style.display = "none";
        }
        else {
            el.style.transform = "rotate(0deg)";
            block.style.display = "block";
        }
    }
}



// window.onload = function price() {
//     let min = document.querySelector("")

// }