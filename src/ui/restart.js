restartBtn.addEventListener("click", () => {

    if ( game.state !== game.GAMEOVER ) return;

    restartGame();
});

function restartGame() {

    console.log("test");

    /**
     * RESET LEVEL, LINE AND SCORE
     */
    level = 1;
    line = 0;
    score = 0;
    leveltext.textContent = `LEVEL: ${level}`;
    linetext.textContent = `LINE: ${line}`;
    scoretext.textContent = `SCORE: ${score}`;

    /**
     * RESET BLOCKS
     */
    nBlock = null;
    block = null;
    fall = false;
    setBlock();
    setTimeout(nextBlock, 100);
    createStaticArray();

    /**
     * RESET GAME SPEED
     */
    game.interval = 1;

    /**
     * SET GAME STATE
     */
    setTimeout(() => {
        game.state = game.PLAY;
        gameOverScreen.style.display = "none";
    }, 400);

    last = null;
    game.GL = requestAnimationFrame(gameLoop);
}

