'use strict'

let hides = document.getElementsByClassName("hide");

window.addEventListener("scroll", () => {
    for (let e of hides) {
        if (e.getBoundingClientRect().top < 100 + window.innerHeight) {
            e.classList.remove('hide');
            e.style.visibility = "visible";
            e.style.marginTop = "30px";
        }
    }
});