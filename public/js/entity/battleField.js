function BattleField() {
    var self = this;
    this.ships = {};
    this.table = _("battlefield-table");
    this.cells = createCells();

    function createCells() {
        var cellElems = self.table.querySelectorAll(".battlefield-cell");
        var cells = [];
        for (var i = 0; i < cellElems.length; i++) {
            var cellElem = cellElems[i];
            var x = parseInt(cellElem.dataset.x, 10);
            var y = parseInt(cellElem.dataset.y, 10);
            cells[x] || (cells[x] = []);
            cells[x][y] || (cells[x][y] = []);
            cells[x][y] = new Cell({
                elem: cellElem,
                state: busyStates.FREE
            });
        }
        return cells;
    }
}

BattleField.prototype.addShip = function (cell, ship) {
    cellUtils.insertShip(cell, ship);
    this.ships[ship.id] = ship;
    console.log(ship);
};

BattleField.prototype.removeShipFromField = function (ship) {
    delete this.ships[ship.id];
    cellUtils.removeShip(ship);
    console.log(ship);
};

BattleField.prototype.getCells = function () {
    var cells = [];
    for (var i = 0; i < this.cells.length; i++) {
        for (var j = 0; j < this.cells[i].length; j++) {
            cells.push(this.cells[i][j]);
        }
    }
    return cells;
};

BattleField.prototype.getCell = function (x, y) {
    return this.cells[x] && this.cells[x][y];
};