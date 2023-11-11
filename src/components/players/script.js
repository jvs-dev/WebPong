function player1Comands() {
    let player1 = document.getElementById("player1")
    window.addEventListener('mousemove', (event) => {
        let y = event.clientY;
        player1.style.top = `${y}px`
    });
}

function player2Comands() {
    let player2 = document.getElementById("player2")
    let ballPositionY = ball.getBoundingClientRect().top
    setInterval(() => {
        ballPositionY = ball.getBoundingClientRect().top
        player2.style.top = `${ballPositionY}px`
    }, 100)
}


player1Comands()
player2Comands()