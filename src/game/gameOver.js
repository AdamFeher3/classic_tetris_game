function checkGameOver() {
    
    if ( game.state !== game.PLAY ) return;

    for ( let j = 0; j < game.height; j++ ) {
        for ( let i = 0; i < game.width; i++ ) {

            for ( let b of block.pos ) {
                
                if ( static[j][i] === "x" ) continue;

                if ( b.x === i && b.y === j )
                    gameOver();
            }
        }
    }
}

/**
 * GAME OVER
 */
function gameOver() {

    gameOverSound();

    g1.clearRect(0, 0, canvas.width, canvas.height);
    g2.clearRect(0, 0, nCanvas.width, nCanvas.height);

    gameOverScreen.style.display = "grid";
    game.state = game.GAMEOVER;
    cancelAnimationFrame(game.GL);
}

