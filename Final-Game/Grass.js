let LivingCreature = require("./LivingCreature")
module.exports = class Grass extends LivingCreature{
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



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


