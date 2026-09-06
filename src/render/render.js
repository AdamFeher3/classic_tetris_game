function drawNextBlock(n) {

    g2.clearRect(0, 0, nCanvas.width, nCanvas.height);

    // BACKGROUND
    for ( let j = 0; j < 7; j++ ) {
        for ( let i = 0; i < 7; i++ ) {

            g2.strokeStyle = "rgba(255,255,255,0.02)";
            g2.lineWidth = 1;
            g2.strokeRect(
                (i*16) + (nBlock.offsetx * 16) - (16*2),
                (j*16) + (nBlock.offsety * 16) - (16*2),
                16, 16
            );
        }
    }

    // BLOCK
    for ( let p of n.pos ) {

        const x = p.x * game.size +1 + (nBlock.offsetx * game.size);
        const y = p.y * game.size +1 + (nBlock.offsety * game.size);

        g2.drawImage(
            game.image,
            n.color * 16, 0,
            16, 16,
            x, y,
            game.size -2,
            game.size -2
        );
    }
}

function drawBlock() {

    // DRAW CURRENT BLOCK
    for ( let b of block.pos ) {

        const x = b.x * game.size +1;
        const y = b.y * game.size +1;
        const w = game.size -2;
        const h = game.size -2;
        
        g1.drawImage(
            game.image,
            block.color * game.size, 0,
            16, 16,
            x, y,
            w, h
        );
    }
}

function drawStaticBlock() {

    // DRAW STATIC BLOCKS
    for ( let j = 0; j < game.height; j++ ) {
        for ( let i = 0; i < game.width; i++ ) {

            if ( static[j][i] === "x" ) continue;

            const x = i * game.size +1;
            const y = j * game.size +1;
            const w = game.size -2;
            const h = game.size -2;
            const color = static[j][i] * game.size;

            g1.drawImage(
                game.image,
                color, 0,
                16, 16,
                x, y,
                w, h
            );
        }
    }
}

function drawBackground() {

    // DRAW BACKGROUND
    for ( let j = 0; j < game.height; j++ ) {
        for ( let i = 0; i < game.width; i++ ) {

            g1.strokeStyle = "rgba(255,255,255,0.02)";
            g1.lineWidth = 1;
            g1.strokeRect(i*16,j*16,16,16);
        }
    }
}

