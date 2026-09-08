const menuScreen = document.getElementById("menu");
const startBtn = document.getElementById("start");
const gameScreen = document.getElementById("game");
const leveltext = document.getElementById("level");
const linetext = document.getElementById("line");
const scoretext = document.getElementById("score");
const pauseScreen = document.getElementById("pause");
const gameOverScreen = document.getElementById("gameover");
const restartBtn = document.getElementById("restart");
const btns = [
    startBtn, restartBtn
];

// MAIN CANVAS
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("mainCanvas");
const g1 = canvas.getContext("2d");

// NEXT CANVAS
/** @type {HTMLCanvasElement} */
const nCanvas = document.getElementById("nextCanvas");
const g2 = nCanvas.getContext("2d");

const game = {

    // GAME SIZE
    width: 10,
    height: 20,

    // CELL SIZE
    size: 16,

    // GAME STATES
    MENU: "menu",
    PLAY: "play",
    PAUSE: "pause",
    GAMEOVER: "gameover",

    state: null,

    // BLOCK IMAGE
    image: null,

    // GAME SPEED INTERVAL
    interval: 1,

    // GAME LOOP
    GL: null
};

/**
 * START GAME
 */
async function startGame() {

    // SET CANVAS SIZE
    canvas.width = game.width * game.size;
    canvas.height = game.height * game.size;

    nCanvas.width = game.size * 5;
    nCanvas.height = game.size * 5;

    g1.imageSmoothingEnabled = false;
    g2.imageSmoothingEnabled = false;

    setBlock();
    setTimeout(nextBlock, 100);
    createStaticArray();

    leveltext.textContent = `LEVEL: ${level}`;

    // LOAD BLOCK IMAGE
    game.image = await loadImage("./src/res/img/block.png");

    // SET GAME STATE
    game.state = game.PLAY;

    // START GAME LOOP
    game.GL = requestAnimationFrame(gameLoop);
}

