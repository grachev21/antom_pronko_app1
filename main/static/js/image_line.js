export function image_line() {
    const links = document.querySelectorAll(".links_shop>.links");
    const img = document.querySelectorAll(".img_block img");

    for (let index = 0; index < links.length; index++) {

        links[index].addEventListener("mouseover",
            function () { this.classList.add("links_activate"); });

        img[index].addEventListener("mouseenter",
            function () { this.classList.add("zoom"); });
        img[index].addEventListener("mouseleave",
            function () { this.classList.remove("zoom"); });
    }
}