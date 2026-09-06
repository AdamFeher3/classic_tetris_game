let updateTime = 0;

// UPDATE GAME
function update(dt) {

    updateStaticBlock();

    if ( clear ) return;
    
    updateTime += dt;
    if ( updateTime < game.interval ) return;

    updateBlock();

    updateTime = 0;
}

// DRAW GAME
function draw() {

    g1.clearRect(0, 0, canvas.width, canvas.height);

    drawBackground();
    drawStaticBlock();
    drawBlock();
}

