var express = require('express');
var app = express();
var server = require('http').createServer(app);
io = require('socket.io')(server);
var fs = require("fs")

app.use(express.static("."));

app.get("/", function (req, res) {
    res.redirect("index.html")
})
server.listen(8000)


Grass = require("./Grass")
GrassEater = require("./GrassEater")
Predator = require("./Predator")
Bomb = require("./Bomb")
Rocket = require("./Rocket")

grassArr = []
grassEaterArr = []
predatorArr = []
bombArr = []
rocketArr = []

matrix = [];

function fillMatrix() {
    for (let i = 0; i < 27; i++) {
        matrix[i] = []
        for (let j = 0; j < 27; j++) {
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

io.sockets.emit('sm', matrix)

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

    io.sockets.emit('sm', matrix)
}

function work() {
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
    io.sockets.emit('sm', matrix)
}
setInterval(work, 10)


function bomb_plant() {
    let x;
    let y;
    x = Math.floor(Math.random() * matrix[0].length)
    y = Math.floor(Math.random() * matrix.length)
    matrix[y][x] = 4
    console.log("Bomb Planted")
    bombArr.push(new Bomb(x, y))
    io.sockets.emit('sm', matrix)
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
    io.sockets.emit('sm', matrix);
}
function light_plant() {
    console.log("lightning")
    io.sockets.emit('sm', matrix);
}

io.on('connection', function (socket) {
    generator();
    socket.on("bomb", bomb_plant);
    socket.on("rocket", rocket_plant);
    socket.on("light", light_plant)
});