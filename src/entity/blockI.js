class BlockI {

    constructor() {
        
        this.pos = [

            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 0, y: 3 }
        ];

        this.color = 2;
        this.canRotate = true;
        this.rotate = 1;
        this.maxRotate = 2;
        this.offsetx = 2;
        this.offsety = 0.5;
    }

    rotate2(b) {

        /**
         * [][][][]
         */
        b.pos[0].x--;
        b.pos[2].x++;
        b.pos[3].x += 2;

        b.pos[0].y++;
        b.pos[2].y--;
        b.pos[3].y -= 2;
    }

    rotate1(b) {
        /**
         * []
         * []
         * []
         * []
        */
        b.pos[0].x++;
        b.pos[2].x--;
        b.pos[3].x -= 2;

        b.pos[0].y--;
        b.pos[2].y++;
        b.pos[3].y += 2;
    }
}

