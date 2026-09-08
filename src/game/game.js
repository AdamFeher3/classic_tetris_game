function collision(dx = 0, dy = 0) {
    
    for ( let p of block.pos ) {
        
        const x = p.x + dx;
        const y = p.y + dy;

        // CHECK SIDES AND BOTTOM
        if (
            x < 0 ||
            x >= game.width ||
            y >= game.height
        )
        return true;

        // CHECK STATIC BLOCK
        if ( y >= 0 && static[y][x] !== "x" )
            return true;
    }

    return false;
}

function updateBlock() {

    if ( !fall ) return;

    // CHECK IF BLOCK CAN FALL
    if ( collision(0,1) ) {

        placeBlock(block);
        fall = false;
        return;
    }

    // BLOCK FALLING DOWN
    for ( let p of block.pos ) p.y++;
}

let moveTime = 0;

function moveDown() {

    if ( !fall ) return;

    moveSound();

    // CHECK IF BLOCK CAN FALL
    if ( collision(0,1) ) {

        placeBlock(block);
        fall = false;
        return;
    }

    // MOVE BLOCK DOWN
    for ( let p of block.pos ) p.y++;
}

function move(dx) {

    if ( !fall ) return;

    moveSound();

    // STOP BLOCK IF HITS SIDES OF CANVAS
    if ( collision(dx,0) ) return;

    // MOVE BLOCK LEFT / RIGHT
    for ( let p of block.pos ) p.x += dx;
}

function rotateBlock() {

    if ( !fall || !block.canRotate ) return;

    rotateSound();

    const b = block;

    // SAVE CURRENT STATE
    const oldPos = b.pos.map(pos => ({...pos}));
    const oldRot = b.rotate;

    // ROTATE
    b.rotate++;
    if ( b.rotate > b.maxRotate ) b.rotate = 1;

    if ( b.rotate === 1 ) b.rotate1(b);
    if ( b.rotate === 2 ) b.rotate2(b);
    if ( b.rotate === 3 ) b.rotate3(b);
    if ( b.rotate === 4 ) b.rotate4(b);

    // CHECK IF BLOCK CAN ROTATE
    for ( let p of b.pos ) {

        if (
            p.x < 0 ||
            p.x >= game.width ||
            p.y >= game.height ||
            static[p.y][p.x] !== "x"
        ) {
            // UNDO ROTATION
            b.pos = oldPos;
            b.rotate = oldRot;
            return;
        }
    }
}

function drop() {

    if ( !fall ) return;
    
    // DROP BLOCK DOWN
    while ( !collision(0,1) )
        for ( let b of block.pos ) b.y++;

    placeBlock(block);
    fall = false;
    dropSound();
    return;
}

