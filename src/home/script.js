/* let glitchLoader = document.getElementById("glitchLoader") */
/* let home = document.getElementById("home") */
/* let homeNav = document.getElementById("homeNav")
let playGame = document.getElementById("playGame") */


window.addEventListener("load", () => {
    setTimeout(() => {
        glitchLoader.style.transition = "0.2s"
        glitchLoader.style.opacity = "0"
        setTimeout(() => {
            glitchLoader.style.display = "none"
            homeNav.style.display = "flex"
            playGame.addEventListener("click", ()=> {
                home.style.opacity = "0"
                home.style.transition = "0.2s"
                setTimeout(() => {
                    home.style.display = "none"
                }, 200);
            })
        }, 200);
    }, 2000);
})