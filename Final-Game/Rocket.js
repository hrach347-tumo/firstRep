module.exports = class Rocket{
    constructor(x, y) {
        this.x = x
        this.y = y
    };
    fly() {
        let xx = this.x + 1
        for (let i = 0; i < matrix.length;i++) {
            
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
        if (xx == matrix.length) {
            this.eat(rocketArr)
            matrix[this.y][this.x] = 0
        }
           
    }
    eat(arr) {
        for (let i = 0; i < arr.length;i++) {
            if (this.x == arr[i].x && this.y == arr[i].y) {
                arr.splice(i,1)
            }
        }
    }

}