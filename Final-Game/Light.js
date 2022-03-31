module.exports = class Light {
    constructor(x, y) {
        this.x = x;
        this.y = y

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
            [this.x + 4, this.y + 4],
            //
            [this.x - 5, this.y - 5],
            [this.x, this.y - 5],
            [this.x + 5, this.y - 5],
            [this.x - 5, this.y],
            [this.x + 5, this.y],
            [this.x - 5, this.y + 5],
            [this.x, this.y + 5],
            [this.x + 5, this.y + 5],
            //
            [this.x - 6, this.y - 6],
            [this.x, this.y - 6],
            [this.x + 6, this.y - 6],
            [this.x - 6, this.y],
            [this.x + 6, this.y],
            [this.x - 6, this.y + 6],
            [this.x, this.y + 6],
            [this.x + 6, this.y + 6],
            //
            [this.x - 7, this.y - 7],
            [this.x, this.y - 7],
            [this.x + 7, this.y - 7],
            [this.x - 7, this.y],
            [this.x + 7, this.y],
            [this.x - 7, this.y + 7],
            [this.x, this.y + 7],
            [this.x + 7, this.y + 7],
            //
            [this.x - 8, this.y - 8],
            [this.x, this.y - 8],
            [this.x + 8, this.y - 8],
            [this.x - 8, this.y],
            [this.x + 8, this.y],
            [this.x - 4, this.y + 8],
            [this.x, this.y + 8],
            [this.x + 8, this.y + 8],
            //
            [this.x - 9, this.y - 9],
            [this.x, this.y - 9],
            [this.x + 9, this.y - 9],
            [this.x - 9, this.y],
            [this.x + 9, this.y],
            [this.x - 9, this.y + 9],
            [this.x, this.y + 9],
            [this.x + 9, this.y + 9],
            //
            [this.x - 10, this.y - 10],
            [this.x, this.y - 10],
            [this.x + 10, this.y - 10],
            [this.x - 10, this.y],
            [this.x + 10, this.y],
            [this.x - 10, this.y + 10],
            [this.x, this.y + 10],
            [this.x + 10, this.y + 10],
            //
            [this.x - 11, this.y - 11],
            [this.x, this.y - 11],
            [this.x + 11, this.y - 11],
            [this.x - 11, this.y],
            [this.x + 11, this.y],
            [this.x - 11, this.y + 11],
            [this.x, this.y + 11],
            [this.x + 11, this.y + 11],
            //
            [this.x - 12, this.y - 12],
            [this.x, this.y - 12],
            [this.x + 12, this.y - 12],
            [this.x - 12, this.y], 
            [this.x + 12, this.y],
            [this.x - 12, this.y + 12],
            [this.x, this.y + 12],
            [this.x + 12, this.y + 12],
            //
            [this.x - 13, this.y - 13],
            [this.x, this.y - 13],
            [this.x + 13, this.y - 13],
            [this.x - 13, this.y],
            [this.x + 13, this.y],
            [this.x - 13, this.y + 13],
            [this.x, this.y + 13],
            [this.x + 13, this.y + 13],
            //
        ];

    }
    lightning() {
        this.getNewCordinates()
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                for (let i in grassArr) {
                    if (x == grassArr[i].x && y == grassArr[i].y) {
                        grassArr.splice(i, 1)
                        matrix[y][x] = 6
                    }
                }
                for (let i in grassEaterArr) {
                    if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1)
                        matrix[y][x] = 6
                    }

                }

                for (let i in predatorArr) {
                    if (x == predatorArr[i].x && y == predatorArr[i].y) {
                        predatorArr.splice(i, 1)
                        matrix[y][x] = 6
                    }

                }
                for (let i in rocketArr) {
                    if (x == rocketArr[i].x && y == rocketArr[i].y) {
                        console.log("dzec")
                        rocketArr.splice(i, 1)
                        matrix[y][x] = 6
                    }

                }
                for (let i in bombArr) {
                    if (x == bombArr[i].x && y == bombArr[i].y) {
                        console.log("bomb lightned")
                        bombArr.splice(i, 1)
                        matrix[y][x] = 6
                    }

                }
                lightArr.splice(0, 1)
                matrix[this.y][this.x] = 6
            }
        }
        setTimeout(function () {
        for (let i in matrix) {
            for (let j in matrix[i]) {
                if (matrix[i][j] == 6) {
                    matrix[i][j] = 0
                }
            }
        }
        },50)
        
    }
}