// CREATE STATIC ARRAY FOR PLACED BLOCKS
let static = null;

function createStaticArray() {

    static = Array.from(
        {length: game.height},
        () => new Array(game.width).fill("x")
    );
}

let clear = false;

function updateStaticBlock() {

    if ( clear ) return;

    // CHECK IF THERE IS A FULL LINE
    for ( let j = 0; j < game.height; j++ ) {

        let full = true;

        for ( let i = 0; i < game.width; i++ ) {
            if ( static[j][i] === "x" ) {

                full = false;
                break;
            }
        }

        // IF THERES A FULL LINE CLEAR ROW
        if ( full && !clear ) {

            clear = true;

            setTimeout(() => {

                clear = false;
                clearLine(j);
                updateStaticBlock();
            }, 50);

            return;
        }
    }
}

let place = null;

function placeBlock(b) {

    // PLACE BLOCK
    for ( const p of b.pos )
        static[p.y][p.x] = b.color;

    // GET NEXT BLOCK
    if ( place !== null ) return;

    place = setTimeout(() => {

        setBlock();
        setTimeout(nextBlock, 50);
        score += 10;
        updateStat();
        place = null;
    }, 50);

}

function clearLine(row) {

    // CLEAR ROWS
    static.splice(row, 1);
    static.unshift(new Array(game.width).fill("x"));

    line++;
    score += 20;
    updateStat();
}

