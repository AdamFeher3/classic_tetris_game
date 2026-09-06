/**
 * KEYBOARD CONTROLS
 */
const includeKeys = [
    "KeyW","KeyS","KeyA","KeyD","KeyP",
    "ArrowUp","ArrowDown","ArrowLeft","ArrowRight"
];

let movedown = false;

document.addEventListener("keydown", (e) => {

    if ( includeKeys.includes(e.code) ) e.preventDefault();
    
    const key = e.code;

    // PAUSE
    if ( key === "KeyP" || key === "Escape" ) {

        if ( e.repeat ) return;

        if ( game.state === game.PLAY ) {

            game.state = game.PAUSE;
            pauseScreen.style.display = "grid";
            cancelAnimationFrame(game.GL);
        }
        else if ( game.state === game.PAUSE ) {

            game.state = game.PLAY;
            pauseScreen.style.display = "none";
            last = null;
            game.GL = requestAnimationFrame(gameLoop);
        }
    }

    if ( game.state !== game.PLAY || !fall ) return;

    // CONTROL BLOCK
    if ( key === "KeyA" || key == "ArrowLeft" ) move(-1);
    if ( key === "KeyD" || key == "ArrowRight" ) move(1);
    if ( key === "KeyW" || key == "ArrowUp" ) rotateBlock();
    if ( key === "KeyS" || key == "ArrowDown" ) {
        moveDown();
        movedown = true;
    }
});

document.addEventListener("keyup", (e) => {

    if ( e.code === "keyS" || e.code === "ArrowDown" )
        movedown = false;
});

