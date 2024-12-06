
let time = 0;

setTimeout(() => {
    document.querySelector("#menu").addEventListener("click", () => {
        document.querySelector("#header__mobile").style.display = "flex";
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector("#header__mobile").querySelectorAll(".header__link").forEach((el) => {

            setTimeout(() => { el.classList.add("lightSpeedInLeft") }, time * 1100);
            setTimeout(() => { el.classList.remove("opacity-none") }, time * 1100 + 1100)
            time += 1
        })
    });
}, 500)