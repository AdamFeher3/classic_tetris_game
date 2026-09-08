restartBtn.addEventListener("click", () => {

    if ( game.state !== game.GAMEOVER ) return;

    gameOverScreen.style.display = "none";
    setTimeout(startTimer, 100);
});

function restartGame() {

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
    game.state = game.PLAY;

    last = null;
    game.GL = requestAnimationFrame(gameLoop);
}

