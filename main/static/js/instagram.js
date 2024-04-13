export function instagram() {
    const instagram = document.querySelectorAll(".instagram_photo");
    const instagram_icon = document.querySelectorAll(".instagram_icon");
    for (let index = 0; index < instagram.length; index++) {
        instagram[index].addEventListener("mouseover",
            function () {
                this.classList.add("zoom", "blackout");
                instagram_icon[index].setAttribute("style", "opacity: 100%; transition: .9s;");
            }
        )
        instagram[index].addEventListener("mouseleave",
            function () {
                this.classList.remove("zoom", "blackout")
                instagram_icon[index].setAttribute("style", "opacity: 0%; transition: .9s;");
            }
        )
    }
}