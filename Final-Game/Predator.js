let LivingCreature = require("./LivingCreature")
module.exports = class Predator extends LivingCreature{
    constructor(x, y, index, multiplay) {
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
        var newCell = random(this.chooseCell(0));

        if (this.multiplay >= 8 && newCell) {
            let xx = newCell[0]
            let yy = newCell[1]
            matrix[yy][xx] = 3;
            predatorArr.push(new Predator(xx, yy))
            this.multiplay = 5;
        }
        this.multiplay++
    }
    move() {
        let newCell = random(this.chooseCell(0))
        if (newCell) {
            let xx = newCell[0]
            let yy = newCell[1]

            matrix[yy][xx] = 3
            matrix[this.y][this.x] = 0;
            this.x = xx;
            this.y = yy;

            this.multiplay -= 1
            if (this.multiplay <= 0) {
                this.die()
            }
        }


    }
    eat() {
        let newCell = random(this.chooseCell(2))
        if (newCell) {
            let xx = newCell[0]
            let yy = newCell[1]
            matrix[yy][xx] = 3;
            matrix[this.y][this.x] = 0;
            this.multiplay++
            this.x = xx
            this.y = yy


            for (let i in grassEaterArr) {
                if (xx == grassEaterArr[i].x && yy == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
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
        for (let i = 0; i < predatorArr.length; i++) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 0
    }

}
