class BlockZ2 {

    constructor() {
        
        this.pos = [
            
            { x: 0, y: 1 },
            { x: 1, y: 1 },
            { x: 1, y: 0 },
            { x: 2, y: 0 }
        ];

        this.color = 5;
        this.canRotate = true;
        this.rotate = 1;
        this.maxRotate = 2;
        this.offsetx = 1;
        this.offsety = 1.5;
    }

    rotate2(b) {

        /**
         * []
         * [][]
         *   []
         */
        b.pos[0].x++;
        b.pos[2].x++;
        b.pos[3].x;

        b.pos[0].y--;
        b.pos[2].y++;
        b.pos[3].y += 2;
    }
    
    rotate1(b) {

        /**
         *   [][]
         * [][]
         */
        b.pos[0].x--;
        b.pos[2].x--;
        b.pos[3].x;

        b.pos[0].y++;
        b.pos[2].y--;
        b.pos[3].y -= 2;
    }
}

