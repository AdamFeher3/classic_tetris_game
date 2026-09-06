startBtn.addEventListener("click", async () => {

    menuScreen.style.display = "none";

    // START GAME
    setTimeout(() => {
        gameScreen.style.display = "grid";
        startGame();
    }, 500);
});

