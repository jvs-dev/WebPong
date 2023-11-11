let ball = document.getElementById("ball")
let score = document.getElementById("score")
let playGame = document.getElementById("playGame")
let home = document.getElementById("home")
function goBall() {
    let player1 = document.getElementById("player1")
    let player2 = document.getElementById("player2")
    let scoreNumber = 0
    let positionX = 0
    let positionY = 0
    let Yvelocity = Math.floor(Math.random() * (5 - (-5) + 1)) + (-5);
    let Xvelocity = 5
    let numeroAleatorioX = 2 /* Math.floor(Math.random() * 2) + 1; */
    let gameSection = document.getElementById("game")
    let sectionHeight = gameSection.clientHeight;
    let sectionWidth = gameSection.clientWidth;
    let multiplys = 0


    switch (numeroAleatorioX) {
        case 2:
            let ballInterval = setInterval(() => {
                if (positionX < Number(`${(sectionWidth / 2) - 20}`) && positionX > Number(`-${(sectionWidth / 2) - 20}`) && positionY > Number(`-${(sectionHeight / 2) - 25}`) && positionY < Number(`${(sectionHeight / 2) - 25}`)) {
                    ball.style.transform = `translate(${positionX + Xvelocity}px, ${positionY + Yvelocity}px)`
                    positionX = positionX + Xvelocity
                    positionY = positionY + Yvelocity
                } else {
                    if (positionX > Number(`${(sectionWidth / 2) - 20}`) || positionX < Number(`-${(sectionWidth / 2) - 20}`)) {
                        if (positionX > 0) {
                            let player2PositionY = player2.getBoundingClientRect();
                            let ballPositionY = ball.getBoundingClientRect()
                            if (player2PositionY.top - (player2.clientHeight / 3) <= ballPositionY.top && player2PositionY.top + player2.clientHeight >= ballPositionY.top) {
                                Xvelocity = Xvelocity * (-1)
                                positionX = positionX + Xvelocity
                                if (multiplys < 35) {
                                    Xvelocity = Xvelocity * 1.05
                                    multiplys++
                                }
                            } else {
                                clearInterval(ballInterval)
                                LoseWin("WIN")
                                gameSection.classList.remove("light")
                            }

                        } else if (positionX < 0) {
                            let player1PositionY = player1.getBoundingClientRect();
                            let ballPositionY = ball.getBoundingClientRect()
                            if (player1PositionY.top - (player1.clientHeight / 3) <= ballPositionY.top && player1PositionY.top + player1.clientHeight >= ballPositionY.top) {
                                Xvelocity = Xvelocity * (-1)
                                positionX = positionX + Xvelocity
                                scoreNumber++
                                score.innerHTML = `Pontos ${scoreNumber}`
                                if (scoreNumber >= 35) {
                                    gameSection.classList.add("light")
                                }
                                if (multiplys < 35) {
                                    Xvelocity = Xvelocity * 1.05
                                    multiplys++
                                }
                            } else {
                                clearInterval(ballInterval)
                                LoseWin("LOSE")
                                gameSection.classList.remove("light")
                            }
                        }
                    }
                    if (positionY < Number(`-${(sectionHeight / 2) - 25}`) || positionY > Number(`${(sectionHeight / 2) - 25}`)) {
                        Yvelocity = Yvelocity * (-1)
                        positionY = positionY + Yvelocity
                    }
                }
            }, 10)
            break;
    }

}

playGame.addEventListener("click", () => {
    ball.style.transform = ``
    setTimeout(() => {
        goBall()
    }, 1000);
})


function LoseWin(result) {
    if (result == "WIN") {
        let victoryWindow = document.getElementById("victoryWindow")
        victoryWindow.style.display = "flex"
        setTimeout(() => {
            victoryWindow.style.opacity = "1"
            setTimeout(() => {
                home.style.display = "flex"
                setTimeout(() => {
                    victoryWindow.style.display = "none"
                    victoryWindow.style.opacity = "0"
                    home.style.transition = "0.2s"
                    home.style.opacity = "1"
                }, 1)
            }, 2000);
        }, 1);
    } else if (result == "LOSE") {
        let loseWindow = document.getElementById("loseWindow")
        loseWindow.style.display = "flex"
        setTimeout(() => {
            loseWindow.style.opacity = "1"
            setTimeout(() => {
                home.style.display = "flex"
                setTimeout(() => {
                    loseWindow.style.display = "none"
                    loseWindow.style.opacity = "0"
                    home.style.transition = "0.2s"
                    home.style.opacity = "1"
                }, 1)
            }, 2000);
        }, 1);
    }
}

let exportTest = (name) => {
    console.log(name);

}