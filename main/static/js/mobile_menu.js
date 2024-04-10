export function mobile_menu() {
    document.querySelector("body").onclick = function (event) {
        let target = event.target
        let class_name = target.className
        console.log(class_name);
        if (class_name == "menu_open") {
            document.querySelector(".exhaust_menu").setAttribute("style", "left: 0px; transition: .9s;")
        }
        if (class_name == "content") {
            document.querySelector(".exhaust_menu").setAttribute("style", "left: -320px; transition: .9s;")
        }
    }
}