let LivingCreature = require(".LivingCreature")
class Grass extends LivingCreature{
    constructor(x, y, index,multiplay,directions) {
        super(x,y,index,multiplay,directions);
    }

    chooseCell(character) {
        return super.chooseCell(character);
    }
    mul() {

        var newCell = random(this.chooseCell(0));
        if (this.multiplay >= 8 && newCell) {
            let newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiplay = 0;
        }
        this.multiplay++;
    }


}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class GrassEater extends LivingCreature{
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
        var newCell = random(this.chooseCell(0));

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
        let newCell = random(this.chooseCell(0))
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
        let newCell = random(this.chooseCell(1))
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Predator {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.multiplay = 5;
        this.index = index;
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
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Bomb {
    constructor(x, y) {
        this.x = x
        this.y = y
    };
    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            //
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            //
            [this.x - 2, this.y - 1],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 1],
            //
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            //
            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y + 3],
            //
            [this.x - 4, this.y - 4],
            [this.x, this.y - 4],
            [this.x + 4, this.y - 4],
            [this.x - 4, this.y],
            [this.x + 4, this.y],
            [this.x - 4, this.y + 4],
            [this.x, this.y + 4],
            [this.x + 4, this.y + 4]
        ];

    }
    blowUp() {
        this.getNewCordinates()
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                for (let i in grassArr) {
                    if (x == grassArr[i].x && y == grassArr[i].y) {
                        grassArr.splice(i, 1)
                        matrix[y][x] = 0
                    }
                }
                for (let i in grassEaterArr) {
                    if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1)
                        matrix[y][x] = 0
                    }

                }

                for (let i in predatorArr) {
                    if (x == predatorArr[i].x && y == predatorArr[i].y) {
                        predatorArr.splice(i, 1)
                        matrix[y][x] = 0
                    }

                }
                for (let i in rocketArr) {
                    if (x == rocketArr[i].x && y == rocketArr[i].y) {
                        console.log("Bingo! You Blowed Up a Rocket")
                        rocketArr.splice(i, 1)
                        matrix[y][x] = 0
                    }

                }

                bombArr.splice(0, 1)
                matrix[this.y][this.x] = 0
            }
        }



    }


}
class Rocket {
    constructor(x, y) {
        this.x = x
        this.y = y
    };
    fly() {
        let xx = this.x + 1
        for (let i = 0; i < matrix[0].length; i++) {

            if (matrix[this.y][xx] == 0) {
                matrix[this.y][xx] = 5
                matrix[this.y][this.x] = 0
                this.x = xx

            }
            else if (matrix[this.y][xx] == 1) {
                this.eat(grassArr)
                matrix[this.y][xx] = 5
                matrix[this.y][this.x] = 0
                this.x = xx
            }
            else if (matrix[this.y][xx] == 2) {
                this.eat(grassEaterArr)
                matrix[this.y][xx] = 5
                matrix[this.y][this.x] = 0
                this.x = xx
            }
            else if (matrix[this.y][xx] == 3) {
                this.eat(predatorArr)
                matrix[this.y][xx] = 5
                matrix[this.y][this.x] = 0
                this.x = xx
            }
        }

    }
    eat(arr) {
        for (let i in arr) {
            if (this.x == arr[i].x && this.y == arr[i].y) {
                arr.splice(i, 1)
            }
        }
    }

}