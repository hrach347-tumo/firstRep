
//alert("Disclaimer !\n1.Click fastly (Plant Bomb) and (Plant Rocket) for good effect\n2.But dont click so continually\n3.The game has no meaning so i tried to add meaning little bit\n4.Try to plant Rocket than blow it up with Bomb\n5.If you dont blow it up than it will be on screen so you can see how many rockets you missed\n6.If matrix end to soon refresh the page !\n\n ENJOY!")
var socket = io();
var side = 20;

function setup() {
    background('grey')
    createCanvas(27 * side, 27 * side)
} 


function drawMatrix(matrix) {
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
}

setInterval(() => {
    socket.on('sm', drawMatrix)
}, 10)
function bomb_plant(){
    socket.emit("bomb")
}
function rocket_plant(){
    socket.emit("rocket")
}
function light_plant(){
    socket.emit("light")
}