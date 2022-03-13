alert("Disclaimer !\n1.Click fastly (Plant Bomb) and (Plant Rocket) for good effect\n2.But dont click so continually\n3.The game has no meaning so i tried to add meaning little bit\n4.Try to plant Rocket than blow it up with Bomb\n5.If you dont blow it up than it will be on screen so you can see how many rockets you missed\n6.If matrix end to soon refresh the page !\n\n ENJOY!")
let matrix = [	
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],

    
 ];

function fillMatrix() {
    for (let i in matrix) {
        for (let i in matrix) {
            matrix[i].push(Math.round(Math.random() * 1.6))
        }
            }
            for (let i = 2; i < matrix.length; i++) {
                for (let x = 5; x < matrix[i].length; x++) {
                    matrix[i][x] = Math.round(Math.random() * 3)
                
            }
        
            }
    }

fillMatrix()


var side = 20;
let grassArr = []
let grassEaterArr = []
let predatorArr =[]
let bombArr = []
let rocketArr = []
function generator() {
    
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                grassEaterArr.push(new GrassEater(x, y))
            }
            else if (matrix[y][x] == 3) {
                predatorArr.push(new Predator(x, y))
            }
        
        }       
    } 

}


    function setup() {
        frameRate(10)
        createCanvas(matrix[0].length * side, matrix.length * side)
        generator()

    }
    let x;
    let y;
    function bomb_plant() {
        x = Math.floor(Math.random() * matrix[0].length)
        y = Math.floor(Math.random() * matrix.length)
        matrix[y][x] = 4
        console.log("Bomb Planted")
        bombArr.push(new Bomb(x, y))
    }
    let randY;
function rocket_plant() {
    randY = Math.floor(Math.random() * matrix.length)
    console.log("Rocket planted y =" + randY)
    if (matrix[randY][0] != 5) {
        rocketArr.push(new Rocket(0, randY))
            matrix[randY][0] = 5
        }
        else {
            rocket_plant()
        }
    }


    function draw() {

        for (let y = 0; y < matrix.length; y++) {

            for (let x = 0; x < matrix[y].length; x++) {

                if (matrix[y][x] == 1) {
                    fill("green")
                    rect(x * side, y * side, side, side)
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow")
                    rect(x * side, y * side, side, side)
                }
                else if (matrix[y][x] == 0) {
                    fill("grey")
                    rect(x * side, y * side, side, side)
                }
                else if (matrix[y][x] == 3) {
                    fill("purple")
                    rect(x * side, y * side, side, side)
                }
                else if (matrix[y][x] == 4) {
                    fill("black")
                    ellipse(x * side, y * side, side + 5, side + 5)
                }
                else if (matrix[y][x] == 5) {
                    fill("blue")
                    rect(x * side, y * side, side, side)
                }


            }

        }
        for (let i = 0; i < grassArr.length; i++) {
            grassArr[i].mul();
        }
        for (let i = 0; i < grassEaterArr.length; i++) {
            grassEaterArr[i].eat()
        }
        for (let i = 0; i < bombArr.length; i++) {
            bombArr[i].blowUp()
        }
        for (let i = 0; i < predatorArr.length; i++) {
            predatorArr[i].eat()
        }
        for (let i = 0; i < rocketArr.length; i++) {
            rocketArr[i].fly()
        }
    }
