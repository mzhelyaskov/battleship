function Ship(params) {
    this.id = params.id || Ship.generateId();
    this.state = params.state || shipState.HIDDEN;
    this.length = params.length;
    this.position = params.position || HORIZONTAL;
    this.cell = null;
    this.coords = [];
    this.elem = params.elem;
    this.elem.ship = this;

    this.setCell = function (cell) {
        this.cell = cell;
        updateCoords.call(this);
    };

    this.getCell = function () {
        return this.cell;
    };
}

Ship.generateId = function () {
    var len = 12;
    var availableDigits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var id = "";
    for (var i = 0; i < len; i++) {
        var randomIndex = Math.floor(Math.random() * availableDigits.length);
        id += availableDigits.substring(randomIndex, randomIndex + 1);
    }
    return id;
};

function updateCoords() {
    this.coords = [];
    for (var i = 0; i < this.length; i++) {
        var x = this.cell.x;
        var y = this.cell.y;
        this.position == HORIZONTAL ? x += i : y += i;
        this.coords.push({
            x: x,
            y: y,
            state: detectionStatus.HIDDEN
        });
    }
}