class BlockL {

    constructor() {
        
        this.pos = [

            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 1, y: 2 }
        ];

        this.color = 0;
        this.canRotate = true;
        this.rotate = 1;
        this.maxRotate = 4;
        this.offsetx = 1.5;
        this.offsety = 1;
    }

    rotate2(b) {

        /**
         *     []
         * [][][]
         */
        b.pos[0].x--;
        b.pos[2].x++;
        b.pos[3].x;

        b.pos[0].y++;
        b.pos[2].y--;
        b.pos[3].y -= 2;
    }

    rotate3(b) {

        /**
         * [][]
         *   []
         *   []
         */
        b.pos[0].x++;
        b.pos[2].x--;
        b.pos[3].x -= 2;

        b.pos[0].y++;
        b.pos[2].y--;
        b.pos[3].y;
    }

    rotate4(b) {

        /**
         * [][][]
         * []
         */
        b.pos[0].x++;
        b.pos[2].x--;
        b.pos[3].x;

        b.pos[0].y--;
        b.pos[2].y++;
        b.pos[3].y += 2;
    }

    rotate1(b) {

        /**
         * []
         * []
         * [][]
         */
        b.pos[0].x--;
        b.pos[2].x++;
        b.pos[3].x += 2;

        b.pos[0].y--;
        b.pos[2].y++;
        b.pos[3].y;
    }
}

