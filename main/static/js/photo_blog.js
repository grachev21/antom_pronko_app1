export function photo_blog() {
    const photo_blog = document.querySelectorAll(".photo_blog img");
    for (let index = 0; index < photo_blog.length; index++) {
        photo_blog[index].addEventListener("mouseover",
            function () { this.classList.add("zoom") }
        )
        photo_blog[index].addEventListener("mouseleave",
            function () { this.classList.remove("zoom") }
        )
    }
}