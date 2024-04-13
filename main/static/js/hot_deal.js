export function hot_deal() {
    const images_hot_deal = document.querySelectorAll(".item_images");
    const panel_links = document.querySelectorAll(".panel_links")
    const icons = document.querySelectorAll("div.block_panel_links")

    for (let index = 0; index < images_hot_deal.length; index++) {
        images_hot_deal[index].addEventListener("mouseover",
            function () { panel_links[index].setAttribute("style", "opacity: 70%; bottom: 120px; transition: .9s;") }
        )
        images_hot_deal[index].addEventListener("mouseleave",
            function () { panel_links[index].setAttribute("style", "opacity: 0%; bottom: 50px; transition: .9s;") }
        )
    }

    for (let index = 0; index < icons.length; index++) {
        icons[index].addEventListener("mouseover",
            function () { icons[index].classList.add("invert_icons") }
        )
        icons[index].addEventListener("mouseleave",
            function () { icons[index].classList.remove("invert_icons") }
        )
    }
}