let LivingCreature = require("./LivingCreature")
let rand = require("./rand")
module.exports=class GrassEater extends LivingCreature{
    constructor(x, y, index,multiplay) {
        super(x,y,index,multiplay);
        this.directions = [];
    }
    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCordinates()
        return super.chooseCell(character);
    }
    mul() {
        var newCell = rand(this.chooseCell(0));

        if (this.multiplay >= 8 && newCell) {
            let xx = newCell[0]
            let yy = newCell[1]
            matrix[yy][xx] = 2;
            grassEaterArr.push(new GrassEater(xx, yy))
            this.multiplay = 5;
        }
        this.multiplay++
    }
    move() {
        let newCell = rand(this.chooseCell(0))
        if (newCell) {
            let xx = newCell[0]
            let yy = newCell[1]

            matrix[yy][xx] = 2
            matrix[this.y][this.x] = 0;
            this.x = xx;
            this.y = yy;

            this.multiplay--
            if (this.multiplay <= 0) {
                this.die()
            }
        }


    }
    eat() {
        let newCell = rand(this.chooseCell(1))      
        if (newCell) {
            let xx = newCell[0]
            let yy = newCell[1]
            matrix[yy][xx] = 2;
            matrix[this.y][this.x] = 0;
            this.multiplay += 1
            this.x = xx
            this.y = yy


            for (let i in grassArr) {
                if (xx == grassArr[i].x && yy == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (this.multiplay >= 20) {
                this.mul();
            }
        }
        else {
            this.move()
        }

    }

    die() {
        for (let i = 0; i < grassEaterArr.length; i++) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 0
    }

}