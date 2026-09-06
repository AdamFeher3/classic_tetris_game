let nBlock = null;
let block = null;
let fall = false;

// SET NEXT BLOCK
function nextBlock() {

    const n = Math.floor(Math.random() * 6) + 1;

    if ( n === 1 ) nBlock = new BlockL();
    if ( n === 2 ) nBlock = new BlockO();
    if ( n === 3 ) nBlock = new BlockI();
    if ( n === 4 ) nBlock = new BlockT();
    if ( n === 5 ) nBlock = new BlockZ1();
    if ( n === 6 ) nBlock = new BlockZ2();

    drawNextBlock(nBlock);
}

// GET NEW BLOCK
function setBlock() {

    if ( nBlock === null ) block = new BlockL();
    else block = nBlock;

    for ( let p of block.pos ) p.x += 4;
    
    setTimeout(() => {
        checkGameOver();
        fall = true;
    }, 100);
}

