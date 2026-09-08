/**
 * LEVEL
 * LINE
 * AND
 * SCORE
 * MANAGE
 */
let level = 1;
let line = 0;
let score = 0;

function updateStat() {

    const nextLevel = Math.floor(line / 10) + 1;

    if ( nextLevel > level ) {

        level = nextLevel;
        score += 100;

        // INCREASE GAME SPEED
        game.interval = Math.max(0.15, game.interval - 0.075);

        // INCREASE BACKGROUND MUSIC SPEED
        bgMusic.playbackRate = Math.min(1.5, bgMusic.playbackRate + 0.05);
    }

    linetext.textContent = `LINE: ${line}`;
    scoretext.textContent = `SCORE: ${score}`;
    leveltext.textContent = `LEVEL: ${level}`;
}

