const buttonAudio = new Audio("./src/res/audio/button.mp3");
const moveAudio = new Audio("./src/res/audio/move.mp3");
const rotateAudio = new Audio("./src/res/audio/rotate.mp3");
const clearAudio = new Audio("./src/res/audio/clear.mp3");
const gameoverAudio = new Audio("./src/res/audio/gameover.mp3");
const timerAudio = new Audio("./src/res/audio/count.wav");
const bgMusic = new Audio("./src/res/audio/music.mp3");

moveAudio.volume = 0.6;
rotateAudio.volume = 0.6;
gameoverAudio.volume = 0.8;
clearAudio.volume = 0.3;
bgMusic.volume = 0.1;
bgMusic.preservesPitch = true;

for ( const b of btns )
    b.addEventListener("mouseover", buttonSound);

function buttonSound() {

    buttonAudio.pause();
    buttonAudio.currentTime = 0.15;
    buttonAudio.play();
}

function moveSound() {
    
    moveAudio.pause();
    moveAudio.currentTime = 0;
    moveAudio.play();
}

function rotateSound() {

    rotateAudio.pause();
    rotateAudio.currentTime = 0;
    rotateAudio.play();
}

function clearSound() {

    clearAudio.pause();
    clearAudio.currentTime = 0;
    clearAudio.play();
}

function gameOverSound() {

    gameoverAudio.pause();
    gameoverAudio.currentTime = 0;
    gameoverAudio.play();
}

function timerSound() {

    timerAudio.pause();
    timerAudio.currentTime = 0;
    timerAudio.play();
}

function playBackgroundMusic() {

    bgMusic.playbackRate = 1;
    bgMusic.currentTime = 0;
    bgMusic.loop = true;
    bgMusic.play();
}

