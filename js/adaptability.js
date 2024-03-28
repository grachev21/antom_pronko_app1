window.onload = function adaptability() {

    if (window.innerWidth < 1200) {
        mobile("on")
    } else {
        mobile("off")
    }

    window.addEventListener("resize", function () {
        if (window.innerWidth < 1200) {
            mobile("on")
        } else {
            mobile("off")
        }

    });

    function mobile(params) {
        let check = document.querySelector(".info_text > nav");
        if (params == "on") {
            offHoverAfter()
            document.querySelector(".info_text").classList.add("adaptability");
            if (check == null) {
                let panel = document.createElement("nav");
                panel.innerHTML = `
                    <div class="panel">
                        <a class="menu">
                            <img src="icons/free-icon-menu-bar-8111040.png">
                            <div class="title">MENU</div>
                        </a>
                        <a class="login">
                            <img src="icons/user.svg">
                            <div class="title">LOGIN</div>
                        </a>
                    </div>
                `;
                document.querySelector(".info_text").prepend(panel)
            }
        }
        if (params == "off") {
            onHoverAfter()
            if (check != null) {
                document.querySelector(".info_text > nav").remove();
            }
            document.querySelector(".info_text").classList.remove("adaptability");
        }
    }
}

function onHoverAfter() {
    let activ_hover = document.querySelectorAll(".info_text > a")
    for (let index = 0; index < activ_hover.length; index++) {
        activ_hover[index].classList.add("activ_hover_after");
    }
}

function offHoverAfter() {
    let activ_hover = document.querySelectorAll(".info_text > a")
    for (let index = 0; index < activ_hover.length; index++) {
        activ_hover[index].classList.remove("activ_hover_after");
    }



}